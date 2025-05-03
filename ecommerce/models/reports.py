from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class SalesReport(models.Model):
	"""Aggregated sales reporting data"""
	REPORT_PERIOD_CHOICES = (
		('daily', 'Daily'),
		('weekly', 'Weekly'),
		('monthly', 'Monthly'),
		('quarterly', 'Quarterly'),
		('yearly', 'Yearly'),
	)

	date = models.DateField()
	period_type = models.CharField(max_length=10, choices=REPORT_PERIOD_CHOICES)
	total_sales = models.DecimalField(max_digits=12, decimal_places=2)
	total_orders = models.PositiveIntegerField()
	average_order_value = models.DecimalField(max_digits=10, decimal_places=2)
	total_customers = models.PositiveIntegerField()
	new_customers = models.PositiveIntegerField()
	returning_customers = models.PositiveIntegerField()
	conversion_rate = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(1)])

	class Meta:
		unique_together = ('date', 'period_type')
		ordering = ['-date']

	def __str__(self):
		return f"{self.period_type.capitalize()} Sales Report for {self.date}"
