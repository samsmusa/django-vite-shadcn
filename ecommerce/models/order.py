import uuid

from django.db import models
from django.utils import timezone

from ecommerce.models.base import Address
from ecommerce.models.inventory import Supplier
from ecommerce.models.product import Product, Discount, ProductVariant
from django.conf import settings


class Order(models.Model):
	"""Customer order model"""
	ORDER_STATUS_CHOICES = (
		('pending', 'Pending'),
		('payment_received', 'Payment Received'),
		('processing', 'Processing'),
		('shipped', 'Shipped'),
		('delivered', 'Delivered'),
		('cancelled', 'Cancelled'),
		('refunded', 'Refunded'),
	)

	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True, related_name='orders')
	guest_email = models.EmailField(blank=True, null=True)
	order_number = models.CharField(max_length=50, unique=True, editable=False)
	status = models.CharField(max_length=20, choices=ORDER_STATUS_CHOICES, default='pending')
	shipping_address = models.ForeignKey(Address, on_delete=models.PROTECT, related_name='shipping_orders')
	billing_address = models.ForeignKey(Address, on_delete=models.PROTECT, related_name='billing_orders')
	subtotal = models.DecimalField(max_digits=10, decimal_places=2)
	discount = models.ForeignKey(Discount, on_delete=models.SET_NULL, blank=True, null=True)
	discount_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	shipping_cost = models.DecimalField(max_digits=10, decimal_places=2)
	tax_amount = models.DecimalField(max_digits=10, decimal_places=2)
	total = models.DecimalField(max_digits=10, decimal_places=2)
	currency = models.CharField(max_length=3, default='USD')
	notes = models.TextField(blank=True, null=True)
	tracking_number = models.CharField(max_length=100, blank=True, null=True)
	shipping_carrier = models.CharField(max_length=100, blank=True, null=True)
	estimated_delivery_date = models.DateField(blank=True, null=True)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	ip_address = models.GenericIPAddressField(blank=True, null=True)
	user_agent = models.TextField(blank=True, null=True)

	class Meta:
		ordering = ['-created_at']

	def __str__(self):
		return self.order_number

	def save(self, *args, **kwargs):
		if not self.order_number:
			self.order_number = self.generate_order_number()
		super().save(*args, **kwargs)

	def generate_order_number(self):
		"""Generate a unique order number"""
		today = timezone.now().strftime('%Y%m%d')
		return f"{today}-{uuid.uuid4().hex[:8].upper()}"


class OrderItem(models.Model):
	"""Individual items within an order"""
	order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
	product = models.ForeignKey(Product, on_delete=models.PROTECT)
	variant = models.ForeignKey(ProductVariant, on_delete=models.PROTECT, blank=True, null=True)
	product_name = models.CharField(max_length=255)  # Snapshot of product name at order time
	variant_name = models.CharField(max_length=255, blank=True, null=True)  # Snapshot of variant name
	sku = models.CharField(max_length=50)  # Snapshot of SKU at order time
	price = models.DecimalField(max_digits=10, decimal_places=2)  # Snapshot of price at order time
	quantity = models.PositiveIntegerField()
	discount_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	total = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return f"{self.product_name} ({self.quantity}) - Order {self.order.order_number}"


class Refund(models.Model):
	"""Order refund information"""
	REFUND_STATUS_CHOICES = (
		('pending', 'Pending'),
		('approved', 'Approved'),
		('rejected', 'Rejected'),
		('completed', 'Completed'),
	)

	order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='refunds')
	refund_number = models.CharField(max_length=50, unique=True, editable=False)
	amount = models.DecimalField(max_digits=10, decimal_places=2)
	reason = models.TextField()
	status = models.CharField(max_length=20, choices=REFUND_STATUS_CHOICES, default='pending')
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	processed_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True,
	                                 related_name='processed_refunds')
	notes = models.TextField(blank=True, null=True)

	def __str__(self):
		return f"Refund {self.refund_number} - {self.amount} for Order {self.order.order_number}"

	def save(self, *args, **kwargs):
		if not self.refund_number:
			self.refund_number = f"REF-{uuid.uuid4().hex[:8].upper()}"
		super().save(*args, **kwargs)


class RefundItem(models.Model):
	"""Individual items within a refund"""
	refund = models.ForeignKey(Refund, on_delete=models.CASCADE, related_name='items')
	order_item = models.ForeignKey(OrderItem, on_delete=models.CASCADE, related_name='refund_items')
	quantity = models.PositiveIntegerField()
	amount = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return f"{self.order_item.product_name} ({self.quantity}) - Refund {self.refund.refund_number}"


class PurchaseOrder(models.Model):
	"""Purchase orders for inventory restocking"""
	PO_STATUS_CHOICES = (
		('draft', 'Draft'),
		('submitted', 'Submitted'),
		('confirmed', 'Confirmed'),
		('shipped', 'Shipped'),
		('received', 'Received'),
		('cancelled', 'Cancelled'),
		('partially_received', 'Partially Received'),
	)

	po_number = models.CharField(max_length=50, unique=True)
	supplier = models.ForeignKey(Supplier, on_delete=models.PROTECT, related_name='purchase_orders')
	status = models.CharField(max_length=20, choices=PO_STATUS_CHOICES, default='draft')
	order_date = models.DateTimeField(auto_now_add=True)
	expected_delivery_date = models.DateField(blank=True, null=True)
	actual_delivery_date = models.DateField(blank=True, null=True)
	subtotal = models.DecimalField(max_digits=10, decimal_places=2)
	tax_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	shipping_cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)
	total_cost = models.DecimalField(max_digits=10, decimal_places=2)
	payment_terms = models.CharField(max_length=100, blank=True, null=True)
	tracking_number = models.CharField(max_length=100, blank=True, null=True)
	notes = models.TextField(blank=True, null=True)
	created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)

	def __str__(self):
		return f"PO-{self.po_number} - {self.supplier.name}"

	def save(self, *args, **kwargs):
		if not self.po_number:
			last_po = PurchaseOrder.objects.order_by('-id').first()
			if last_po:
				last_num = int(last_po.po_number.replace('PO', ''))
				self.po_number = f"PO{last_num + 1:06d}"
			else:
				self.po_number = "PO000001"
		super().save(*args, **kwargs)


class PurchaseOrderItem(models.Model):
	"""Individual items within a purchase order"""
	purchase_order = models.ForeignKey(PurchaseOrder, on_delete=models.CASCADE, related_name='items')
	product = models.ForeignKey(Product, on_delete=models.PROTECT)
	quantity_ordered = models.PositiveIntegerField()
	quantity_received = models.PositiveIntegerField(default=0)
	unit_cost = models.DecimalField(max_digits=10, decimal_places=2)
	total_cost = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return f"{self.product.name} ({self.quantity_ordered}) - {self.purchase_order.po_number}"


class ShippingMethod(models.Model):
	"""Shipping method configuration"""
	name = models.CharField(max_length=100)
	description = models.TextField(blank=True, null=True)
	carrier = models.CharField(max_length=100)
	tracking_url_template = models.CharField(max_length=255, blank=True, null=True)
	base_price = models.DecimalField(max_digits=10, decimal_places=2)
	is_active = models.BooleanField(default=True)
	estimated_delivery_days = models.PositiveIntegerField()

	def __str__(self):
		return self.name


class ShippingZone(models.Model):
	"""Shipping cost by geographic zone"""
	name = models.CharField(max_length=100)
	countries = models.TextField()  # Comma-separated list of country codes

	def __str__(self):
		return self.name


class ShippingRate(models.Model):
	"""Shipping rates based on weight, zone, and method"""
	shipping_method = models.ForeignKey(ShippingMethod, on_delete=models.CASCADE, related_name='rates')
	shipping_zone = models.ForeignKey(ShippingZone, on_delete=models.CASCADE, related_name='rates')
	min_weight = models.DecimalField(max_digits=10, decimal_places=2)
	max_weight = models.DecimalField(max_digits=10, decimal_places=2)
	rate = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return f"{self.shipping_method.name} - {self.shipping_zone.name} ({self.min_weight}kg-{self.max_weight}kg)"
