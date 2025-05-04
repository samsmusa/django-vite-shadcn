from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.utils.text import slugify


class CustomUserManager(UserManager):
	def vendors(self):
		return self.filter(role=User.Role.VENDOR)

	def store_managers(self):
		return self.filter(role=User.Role.MANAGER)

	def customers(self):
		return self.filter(role=User.Role.CUSTOMER)


class User(AbstractUser):
	class Role(models.TextChoices):
		ADMIN = 'ADMIN', 'Admin'
		VENDOR = 'VENDOR', 'Vendor'
		MANAGER = 'MANAGER', 'Store Manager'
		CUSTOMER = 'CUSTOMER', 'Customer'

	phone_number = models.CharField(max_length=20, blank=True, null=True)
	date_of_birth = models.DateField(blank=True, null=True)
	profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
	is_marketing_subscribed = models.BooleanField(default=False)
	last_login_ip = models.GenericIPAddressField(blank=True, null=True)
	role = models.CharField(max_length=10, choices=Role.choices, default=Role.CUSTOMER)

	objects = CustomUserManager()

	def is_vendor(self):
		return self.role == self.Role.VENDOR

	def is_manager(self):
		return self.role == self.Role.MANAGER

	def is_customer(self):
		return self.role == self.Role.CUSTOMER

	def __str__(self):
		return f"{self.username} ({self.get_role_display()})"


class Vendor(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='vendor')
	store_name = models.CharField(max_length=255)
	store_slug = models.SlugField(unique=True, blank=True)
	description = models.TextField(blank=True, null=True)
	logo = models.ImageField(upload_to='vendor_logos/', blank=True, null=True)
	is_active = models.BooleanField(default=True)
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ['store_name']

	def save(self, *args, **kwargs):
		if not self.store_slug:
			self.store_slug = slugify(self.store_name)
		super().save(*args, **kwargs)

	def __str__(self):
		return self.store_name

	def get_managers(self):
		return self.managers.select_related('user').all()

	def total_products(self):
		return self.products.count()

	def active_orders(self):
		return self.orders.filter(status='PROCESSING')


class StoreManager(models.Model):
	vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, related_name='managers')
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='store_manager_profile', unique=True)
	can_manage_products = models.BooleanField(default=True)
	can_manage_orders = models.BooleanField(default=True)
	assigned_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ['-assigned_at']

	def __str__(self):
		return f"{self.user.username} manages {self.vendor.store_name}"

	def revoke_permissions(self):
		self.can_manage_orders = False
		self.can_manage_products = False
		self.save()


class CustomerProfile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='customer_profile')
	preferred_language = models.CharField(max_length=20, blank=True, null=True)
	loyalty_points = models.PositiveIntegerField(default=0)

	def __str__(self):
		return f"{self.user.username} (Customer)"
