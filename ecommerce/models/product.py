from decimal import Decimal

from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.utils.text import slugify

from account.models import Vendor
from ecommerce.mixins import SEOMixin, TimeStampedMixin, UserTrackingMixin
from ecommerce.models.base import Category
from ecommerce.models.brand import Brand


class ProductAttribute(models.Model):
	"""Product attribute definitions (e.g., Color, Size, Material)"""
	name = models.CharField(max_length=100)
	description = models.TextField(blank=True, null=True)

	def __str__(self):
		return self.name


class ProductAttributeValue(models.Model):
	"""Values for product attributes (e.g., Red, Large, Cotton)"""
	attribute = models.ForeignKey(ProductAttribute, on_delete=models.CASCADE, related_name='values')
	value = models.CharField(max_length=100)

	class Meta:
		unique_together = ('attribute', 'value')

	def __str__(self):
		return f"{self.attribute.name}: {self.value}"


class Product(SEOMixin, TimeStampedMixin, UserTrackingMixin):
	"""Main product model"""
	name = models.CharField(max_length=255)
	sku = models.CharField(max_length=50, unique=True)
	brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, blank=True, null=True, related_name='products')
	category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True, related_name='products')
	description = models.TextField()
	short_description = models.TextField(blank=True, null=True)
	price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))])
	compare_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	cost_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	is_active = models.BooleanField(default=True)
	is_featured = models.BooleanField(default=False)
	is_digital = models.BooleanField(default=False)
	requires_shipping = models.BooleanField(default=True)
	tax_class = models.CharField(max_length=50, blank=True, null=True)
	inventory_tracking = models.BooleanField(default=True)
	stock_quantity = models.PositiveIntegerField(default=0)
	low_stock_threshold = models.PositiveIntegerField(default=10)
	weight = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	width = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	height = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	depth = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

	vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, related_name='products')

	class Meta:
		ordering = ['-created_at']

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		if not self.slug:
			self.slug = slugify(self.name)
		super().save(*args, **kwargs)

	def get_absolute_url(self):
		return reverse('product_detail', kwargs={'slug': self.slug})

	@property
	def is_in_stock(self):
		return self.inventory_tracking is False or self.stock_quantity > 0

	@property
	def is_on_sale(self):
		return bool(self.compare_price and self.compare_price > self.price)

	@property
	def discount_percentage(self):
		if self.is_on_sale:
			return int(100 - (self.price / self.compare_price * 100))
		return 0

	@property
	def profit_margin(self):
		if self.cost_price and self.cost_price > 0:
			return (self.price - self.cost_price) / self.price * 100
		return None


class ProductImage(TimeStampedMixin, UserTrackingMixin):
	"""Product images"""
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
	image = models.ImageField(upload_to='products/')
	alt_text = models.CharField(max_length=255, blank=True, null=True)
	is_primary = models.BooleanField(default=False)
	sort_order = models.PositiveIntegerField(default=0)

	class Meta:
		ordering = ['sort_order']

	def __str__(self):
		return f"Image for {self.product.name}"

	def save(self, *args, **kwargs):
		if self.is_primary:
			# Set all other images of this product to non-primary
			ProductImage.objects.filter(product=self.product, is_primary=True).update(is_primary=False)
		super().save(*args, **kwargs)


class ProductVariant(models.Model):
	"""Product variants (e.g., different sizes, colors)"""
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='variants')
	name = models.CharField(max_length=255, blank=True, null=True)
	sku = models.CharField(max_length=50, unique=True)
	price_adjustment = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	stock_quantity = models.PositiveIntegerField(default=0)
	is_active = models.BooleanField(default=True)
	attributes = models.ManyToManyField(ProductAttributeValue, through='ProductVariantAttribute')
	image = models.ImageField(upload_to='variants/', blank=True, null=True)

	def __str__(self):
		return f"{self.product.name} - {self.name if self.name else self.id}"

	@property
	def price(self):
		return self.product.price + self.price_adjustment

	@property
	def is_in_stock(self):
		return self.stock_quantity > 0


class ProductVariantAttribute(models.Model):
	"""Mapping between product variants and their attributes"""
	variant = models.ForeignKey(ProductVariant, on_delete=models.CASCADE)
	attribute_value = models.ForeignKey(ProductAttributeValue, on_delete=models.CASCADE)

	class Meta:
		unique_together = ('variant', 'attribute_value')

	def __str__(self):
		return f"{self.variant} - {self.attribute_value}"


class Wishlist(TimeStampedMixin):
	"""User product wishlist"""
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='wishlists')
	name = models.CharField(max_length=100, default='My Wishlist')
	is_public = models.BooleanField(default=False)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	def __str__(self):
		return f"{self.name} - {self.user.username}"


class WishlistItem(TimeStampedMixin):
	"""Items in a user's wishlist"""
	wishlist = models.ForeignKey(Wishlist, on_delete=models.CASCADE, related_name='items')
	product = models.ForeignKey(Product, on_delete=models.CASCADE)
	variant = models.ForeignKey(ProductVariant, on_delete=models.SET_NULL, blank=True, null=True)

	class Meta:
		unique_together = ('wishlist', 'product', 'variant')

	def __str__(self):
		return f"{self.product.name} in {self.wishlist.name}"


class ProductReview(TimeStampedMixin):
	"""Customer product reviews"""
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reviews')
	rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
	comment = models.TextField()
	is_approved = models.BooleanField(default=False)

	class Meta:
		# unique_together = ('product', 'user')
		ordering = ['-created_at']

	def __str__(self):
		return f"{self.product.name} - {self.rating}/5 by {self.user.username}"

class PromotedProduct(TimeStampedMixin):
	name = models.CharField(max_length=255)
	products = models.ManyToManyField(Product)
	start_date = models.DateTimeField()
	end_date = models.DateTimeField()

	def clean(self):
		super().clean()
		if self.start_date and self.end_date and self.start_date >= self.end_date:
			raise ValidationError("Start date must be before end date.")

	def save(self, *args, **kwargs):
		self.full_clean()
		super().save(*args, **kwargs)


class ProductRecommendation(TimeStampedMixin):
	"""Product recommendations for data-driven cross-selling"""
	source_product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='source_recommendations')
	recommended_product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='target_recommendations')
	strength = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(1)])
	recommendation_type = models.CharField(max_length=50, choices=[
		('purchased_together', 'Frequently Purchased Together'),
		('viewed_together', 'Frequently Viewed Together'),
		('similar_products', 'Similar Products'),
		('manual', 'Manual Recommendation'),
	])

	class Meta:
		unique_together = ('source_product', 'recommended_product', 'recommendation_type')

	def __str__(self):
		return f"{self.source_product.name} -> {self.recommended_product.name} ({self.recommendation_type})"


class Discount(models.Model):
	"""Discount and promotion model"""
	DISCOUNT_TYPE_CHOICES = (
		('percentage', 'Percentage'),
		('fixed_amount', 'Fixed Amount'),
	)

	code = models.CharField(max_length=50, unique=True)
	name = models.CharField(max_length=100)
	description = models.TextField(blank=True, null=True)
	discount_type = models.CharField(max_length=20, choices=DISCOUNT_TYPE_CHOICES)
	value = models.DecimalField(max_digits=10, decimal_places=2)
	is_active = models.BooleanField(default=True)
	valid_from = models.DateTimeField(default=timezone.now)
	valid_to = models.DateTimeField(blank=True, null=True)
	minimum_order_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	maximum_discount_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	usage_limit = models.PositiveIntegerField(blank=True, null=True)
	usage_count = models.PositiveIntegerField(default=0)
	is_one_time_use_per_customer = models.BooleanField(default=False)
	applies_to_products = models.ManyToManyField(Product, blank=True, related_name='discounts')
	applies_to_categories = models.ManyToManyField(Category, blank=True, related_name='discounts')

	def __str__(self):
		return self.code

	@property
	def is_expired(self):
		return self.valid_to and timezone.now() > self.valid_to

	@property
	def is_valid(self):
		now = timezone.now()
		return (
				self.is_active
				and now >= self.valid_from
				and (self.valid_to is None or now <= self.valid_to)
				and (self.usage_limit is None or self.usage_count < self.usage_limit)
		)


class Cart(TimeStampedMixin):
	"""User shopping cart"""
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True,
	                         related_name='carts')
	session_id = models.CharField(max_length=255, blank=True, null=True)
	discount = models.ForeignKey(Discount, on_delete=models.SET_NULL, blank=True, null=True)
	is_active = models.BooleanField(default=False)

	class Meta:
		constraints = [
			models.CheckConstraint(
				check=models.Q(user__isnull=False) | models.Q(session_id__isnull=False),
				name='cart_user_or_session'
			)
		]

	def __str__(self):
		return f"Cart {self.id} - {'User: ' + self.user.username if self.user else 'Session: ' + self.session_id}"

	@property
	def subtotal(self):
		return sum(item.line_total for item in self.items.all())

	@property
	def discount_amount(self):
		if not self.discount or not self.discount.is_valid:
			return Decimal('0.00')

		if self.discount.discount_type == 'percentage':
			amount = self.subtotal * (self.discount.value / 100)
		else:
			amount = self.discount.value

		if self.discount.maximum_discount_amount:
			amount = min(amount, self.discount.maximum_discount_amount)

		return amount

	@property
	def total(self):
		return self.subtotal - self.discount_amount


class CartItem(TimeStampedMixin):
	"""Items in a user's cart"""
	cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
	product = models.ForeignKey(Product, on_delete=models.CASCADE)
	variant = models.ForeignKey(ProductVariant, on_delete=models.SET_NULL, blank=True, null=True)
	quantity = models.PositiveIntegerField(default=1)

	class Meta:
		unique_together = ('cart', 'product', 'variant')

	def __str__(self):
		variant_str = f" - {self.variant}" if self.variant else ""
		return f"{self.product}{variant_str} ({self.quantity})"

	@property
	def unit_price(self):
		if self.variant:
			return self.variant.price
		return self.product.price

	@property
	def line_total(self):
		return self.unit_price * self.quantity


class AbandonedCart(TimeStampedMixin):
	"""Track abandoned carts for recovery campaigns"""
	cart = models.OneToOneField(Cart, on_delete=models.CASCADE, related_name='abandoned_cart')
	recovery_email_sent = models.BooleanField(default=False)
	email_sent_at = models.DateTimeField(blank=True, null=True)
	recovered = models.BooleanField(default=False)
	recovered_at = models.DateTimeField(blank=True, null=True)

	def __str__(self):
		return f"Abandoned Cart {self.cart.id}"
