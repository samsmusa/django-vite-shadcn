from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from ecommerce.models.product import Product
from django.conf import settings


class ProductPerformance(models.Model):
	"""Product performance metrics"""
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='performance_metrics')
	date = models.DateField()
	views = models.PositiveIntegerField(default=0)
	add_to_cart = models.PositiveIntegerField(default=0)
	purchases = models.PositiveIntegerField(default=0)
	revenue = models.DecimalField(max_digits=12, decimal_places=2, default=0)
	conversion_rate = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(1)], default=0)

	class Meta:
		unique_together = ('product', 'date')
		ordering = ['-date']

	def __str__(self):
		return f"{self.product.name} Performance on {self.date}"


class UserSegment(models.Model):
	"""Customer segmentation for targeted marketing"""
	name = models.CharField(max_length=100)
	description = models.TextField(blank=True, null=True)
	segment_criteria = models.JSONField()  # Store criteria as JSON
	auto_update = models.BooleanField(default=True)
	last_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.name


class SegmentMembership(models.Model):
	"""Users belonging to specific segments"""
	segment = models.ForeignKey(UserSegment, on_delete=models.CASCADE, related_name='memberships')
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='segments')
	added_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		unique_together = ('segment', 'user')

	def __str__(self):
		return f"{self.user.username} in {self.segment.name}"


class MarketingCampaign(models.Model):
	"""Marketing campaign tracking"""
	CAMPAIGN_STATUS_CHOICES = (
		('draft', 'Draft'),
		('scheduled', 'Scheduled'),
		('active', 'Active'),
		('paused', 'Paused'),
		('completed', 'Completed'),
		('cancelled', 'Cancelled'),
	)

	name = models.CharField(max_length=100)
	description = models.TextField(blank=True, null=True)
	status = models.CharField(max_length=20, choices=CAMPAIGN_STATUS_CHOICES, default='draft')
	start_date = models.DateTimeField(blank=True, null=True)
	end_date = models.DateTimeField(blank=True, null=True)
	budget = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
	target_segments = models.ManyToManyField(UserSegment, blank=True, related_name='campaigns')
	target_products = models.ManyToManyField(Product, blank=True, related_name='campaigns')
	utm_source = models.CharField(max_length=100, blank=True, null=True)
	utm_medium = models.CharField(max_length=100, blank=True, null=True)
	utm_campaign = models.CharField(max_length=100, blank=True, null=True)

	def __str__(self):
		return self.name
