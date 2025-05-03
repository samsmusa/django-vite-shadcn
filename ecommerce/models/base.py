from django.db import models
from django.urls import reverse
from django.utils.text import slugify

from ecommerce.mixins import SEOMixin, TimeStampedMixin
from django.conf import settings


class Address(models.Model):
	"""User address model for shipping and billing"""
	ADDRESS_TYPE_CHOICES = (
		('billing', 'Billing'),
		('shipping', 'Shipping'),
	)

	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='addresses')
	address_type = models.CharField(max_length=10, choices=ADDRESS_TYPE_CHOICES)
	is_default = models.BooleanField(default=False)
	full_name = models.CharField(max_length=100)
	address_line1 = models.CharField(max_length=100)
	address_line2 = models.CharField(max_length=100, blank=True, null=True)
	city = models.CharField(max_length=100)
	state = models.CharField(max_length=100)
	country = models.CharField(max_length=100)
	postal_code = models.CharField(max_length=20)
	phone_number = models.CharField(max_length=20)

	class Meta:
		verbose_name_plural = 'Addresses'
		unique_together = ('user', 'address_type', 'is_default')

	def __str__(self):
		return f"{self.full_name}, {self.address_line1}, {self.city}"

	def save(self, *args, **kwargs):
		if self.is_default:
			# Set all other addresses of this type to non-default
			Address.objects.filter(
				user=self.user,
				address_type=self.address_type,
				is_default=True
			).update(is_default=False)
		super().save(*args, **kwargs)


class Category(SEOMixin, TimeStampedMixin):
	"""Product category hierarchy"""
	name = models.CharField(max_length=100)
	description = models.TextField(blank=True, null=True)
	parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name='children')
	image = models.ImageField(upload_to='categories/', blank=True, null=True)
	is_active = models.BooleanField(default=True)

	class Meta:
		verbose_name_plural = 'Categories'
		ordering = ['name']

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		if not self.slug:
			self.slug = slugify(self.name)
		super().save(*args, **kwargs)

	def get_absolute_url(self):
		return reverse('category_detail', kwargs={'slug': self.slug})

	@property
	def full_path(self):
		"""Return category breadcrumb path"""
		path = [self.name]
		parent = self.parent

		while parent:
			path.append(parent.name)
			parent = parent.parent

		return ' > '.join(path[::-1])


class SiteConfiguration(models.Model):
	"""Global site configuration settings"""
	site_name = models.CharField(max_length=100)
	site_logo = models.ImageField(upload_to='site/', blank=True, null=True)
	contact_email = models.EmailField()
	support_phone = models.CharField(max_length=20, blank=True, null=True)
	default_currency = models.CharField(max_length=3, default='USD')
	base_country = models.CharField(max_length=2, default='US')  # ISO country code
	enable_reviews = models.BooleanField(default=True)
	enable_wishlists = models.BooleanField(default=True)
	enable_tax_calculation = models.BooleanField(default=True)
	default_tax_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0)
	enable_guest_checkout = models.BooleanField(default=True)
	meta_description = models.TextField(blank=True, null=True)
	meta_keywords = models.CharField(max_length=255, blank=True, null=True)
	analytics_code = models.TextField(blank=True, null=True)

	def __str__(self):
		return self.site_name

