from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.utils import timezone

from ecommerce.models.base import Category
from ecommerce.models.brand import Brand
from ecommerce.models.order import Order, OrderItem
from ecommerce.models.product import Product
from django.conf import settings


class CustomerAnalytics(models.Model):
	"""Customer analytics and behavior data"""
	user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='analytics')
	total_spent = models.DecimalField(max_digits=12, decimal_places=2, default=0)
	total_orders = models.PositiveIntegerField(default=0)
	average_order_value = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	first_purchase_date = models.DateTimeField(blank=True, null=True)
	last_purchase_date = models.DateTimeField(blank=True, null=True)
	favorite_category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
	favorite_brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, blank=True, null=True)
	days_since_last_purchase = models.PositiveIntegerField(blank=True, null=True)
	lifetime_value_prediction = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
	churn_risk_score = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(1)], blank=True, null=True)
	last_updated = models.DateTimeField(auto_now=True)

	class Meta:
		verbose_name_plural = 'Customer analytics'

	def __str__(self):
		return f"Analytics for {self.user.username}"

	def update_metrics(self):
		"""Update user analytics based on order history"""
		user_orders = Order.objects.filter(user=self.user,
		                                   status__in=['payment_received', 'processing', 'shipped', 'delivered'])

		self.total_orders = user_orders.count()

		if self.total_orders > 0:
			self.total_spent = user_orders.aggregate(models.Sum('total'))['total__sum'] or 0
			self.average_order_value = self.total_spent / self.total_orders

			self.first_purchase_date = user_orders.order_by('created_at').first().created_at
			self.last_purchase_date = user_orders.order_by('-created_at').first().created_at

			if self.last_purchase_date:
				days_since = (timezone.now().date() - self.last_purchase_date.date()).days
				self.days_since_last_purchase = days_since

			# Calculate favorite category based on purchases
			from django.db.models import Count
			order_items = OrderItem.objects.filter(order__in=user_orders)
			category_purchases = order_items.values('product__category').annotate(
				count=Count('product__category')
			).order_by('-count')

			if category_purchases:
				top_category_id = category_purchases[0]['product__category']
				self.favorite_category_id = top_category_id

			# Calculate favorite brand based on purchases
			brand_purchases = order_items.values('product__brand').annotate(
				count=Count('product__brand')
			).order_by('-count')

			if brand_purchases:
				top_brand_id = brand_purchases[0]['product__brand']
				self.favorite_brand_id = top_brand_id

		self.save()


class ProductView(models.Model):
	"""Track product view events"""
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='views')
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
	session_id = models.CharField(max_length=255, blank=True, null=True)
	ip_address = models.GenericIPAddressField(blank=True, null=True)
	user_agent = models.TextField(blank=True, null=True)
	referrer = models.URLField(blank=True, null=True)
	view_time = models.DateTimeField(auto_now_add=True)
	time_spent = models.PositiveIntegerField(blank=True, null=True)  # Time spent in seconds

	class Meta:
		constraints = [
			models.CheckConstraint(
				check=models.Q(user__isnull=False) | models.Q(session_id__isnull=False),
				name='product_view_user_or_session'
			)
		]

	def __str__(self):
		return f"{self.product.name} viewed at {self.view_time}"


class SearchQuery(models.Model):
	"""Track user search queries"""
	query = models.CharField(max_length=255)
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
	session_id = models.CharField(max_length=255, blank=True, null=True)
	created_at = models.DateTimeField(auto_now_add=True)
	results_count = models.PositiveIntegerField(default=0)
	category_filter = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
	price_min = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	price_max = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	conversion = models.BooleanField(default=False)  # Whether this search led to a purchase

	class Meta:
		constraints = [
			models.CheckConstraint(
				check=models.Q(user__isnull=False) | models.Q(session_id__isnull=False),
				name='search_query_user_or_session'
			)
		]
		verbose_name_plural = 'Search queries'

	def __str__(self):
		return f"{self.query} ({self.results_count} results)"
