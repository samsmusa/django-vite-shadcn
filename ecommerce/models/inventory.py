from django.db import models

from ecommerce.models.product import Product
from django.conf import settings


class Inventory(models.Model):
	"""Inventory management and tracking"""
	product = models.OneToOneField(Product, on_delete=models.CASCADE, related_name='inventory')
	sku = models.CharField(max_length=50, unique=True)
	quantity = models.PositiveIntegerField(default=0)
	reserved_quantity = models.PositiveIntegerField(default=0)  # Qty in carts but not yet purchased
	reorder_level = models.PositiveIntegerField(default=5)
	reorder_quantity = models.PositiveIntegerField(default=10)
	last_restock_date = models.DateTimeField(blank=True, null=True)
	next_restock_date = models.DateTimeField(blank=True, null=True)
	warehouse_location = models.CharField(max_length=100, blank=True, null=True)
	supplier = models.ForeignKey('Supplier', on_delete=models.SET_NULL, blank=True, null=True)

	class Meta:
		verbose_name_plural = 'Inventories'

	def __str__(self):
		return f"Inventory for {self.product.name}"

	@property
	def available_quantity(self):
		"""Quantity available for purchase"""
		return max(0, self.quantity - self.reserved_quantity)

	@property
	def needs_reorder(self):
		"""Check if product needs to be reordered"""
		return self.available_quantity <= self.reorder_level


class InventoryLog(models.Model):
	"""Inventory change history"""
	OPERATION_TYPE_CHOICES = (
		('restock', 'Restock'),
		('sale', 'Sale'),
		('return', 'Return'),
		('adjustment', 'Adjustment'),
		('reserve', 'Reserve'),
		('release', 'Release Reserve'),
	)

	inventory = models.ForeignKey(Inventory, on_delete=models.CASCADE, related_name='logs')
	quantity_change = models.IntegerField()  # Positive for additions, negative for reductions
	operation_type = models.CharField(max_length=20, choices=OPERATION_TYPE_CHOICES)
	reference = models.CharField(max_length=100, blank=True, null=True)  # Order number, return ID, etc.
	notes = models.TextField(blank=True, null=True)
	created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.operation_type} {self.quantity_change} for {self.inventory.product.name}"


class Supplier(models.Model):
	"""Product supplier information"""
	name = models.CharField(max_length=100)
	contact_name = models.CharField(max_length=100, blank=True, null=True)
	email = models.EmailField(blank=True, null=True)
	phone = models.CharField(max_length=20, blank=True, null=True)
	website = models.URLField(blank=True, null=True)
	address = models.TextField(blank=True, null=True)
	account_number = models.CharField(max_length=50, blank=True, null=True)
	minimum_order_quantity = models.PositiveIntegerField(blank=True, null=True)
	lead_time_days = models.PositiveIntegerField(blank=True, null=True)
	is_active = models.BooleanField(default=True)
	notes = models.TextField(blank=True, null=True)

	def __str__(self):
		return self.name
