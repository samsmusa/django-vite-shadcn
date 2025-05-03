from django.db import models

from ecommerce.models.order import Order


class Payment(models.Model):
	"""Order payment information"""
	PAYMENT_STATUS_CHOICES = (
		('pending', 'Pending'),
		('completed', 'Completed'),
		('failed', 'Failed'),
		('refunded', 'Refunded'),
		('partially_refunded', 'Partially Refunded'),
	)

	PAYMENT_METHOD_CHOICES = (
		('credit_card', 'Credit Card'),
		('paypal', 'PayPal'),
		('bank_transfer', 'Bank Transfer'),
		('apple_pay', 'Apple Pay'),
		('google_pay', 'Google Pay'),
		('other', 'Other'),
	)

	order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='payments')
	payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES)
	transaction_id = models.CharField(max_length=255, blank=True, null=True)
	amount = models.DecimalField(max_digits=10, decimal_places=2)
	currency = models.CharField(max_length=3, default='USD')
	status = models.CharField(max_length=20, choices=PAYMENT_STATUS_CHOICES, default='pending')
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	payment_date = models.DateTimeField(blank=True, null=True)
	last_four = models.CharField(max_length=4, blank=True, null=True)  # Last 4 digits of card
	card_type = models.CharField(max_length=20, blank=True, null=True)
	gateway_response = models.JSONField(blank=True, null=True)

	def __str__(self):
		return f"Payment {self.id} - {self.amount} {self.currency} for Order {self.order.order_number}"
