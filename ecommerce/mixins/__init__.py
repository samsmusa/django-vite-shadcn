from django.conf import settings
from django.db import models
from django.utils.text import slugify


class TimeStampedMixin(models.Model):
	"""Adds created_at and updated_at fields."""
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	class Meta:
		abstract = True


class UserTrackingMixin(models.Model):
	"""Tracks who created and last updated the object."""
	created_by = models.ForeignKey(
		settings.AUTH_USER_MODEL,
		on_delete=models.SET_NULL,
		null=True,
		blank=True,
		related_name="%(class)s_created"
	)
	updated_by = models.ForeignKey(
		settings.AUTH_USER_MODEL,
		on_delete=models.SET_NULL,
		null=True,
		blank=True,
		related_name="%(class)s_updated"
	)

	class Meta:
		abstract = True


class SEOMixin(models.Model):
	"""Standard SEO metadata fields."""
	slug = models.SlugField(max_length=255, unique=True, blank=True)
	meta_title = models.CharField(max_length=255, blank=True, null=True)
	meta_description = models.TextField(blank=True, null=True)
	meta_keywords = models.CharField(max_length=255, blank=True, null=True)

	class Meta:
		abstract = True

	def save(self, *args, **kwargs):
		if not self.slug and hasattr(self, 'name'):
			self.slug = slugify(self.name)
		super().save(*args, **kwargs)
