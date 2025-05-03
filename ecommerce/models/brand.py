from django.db import models
from django.utils.text import slugify


class Brand(models.Model):
	"""Product brand information"""
	name = models.CharField(max_length=100)
	slug = models.SlugField(max_length=100, unique=True)
	description = models.TextField(blank=True, null=True)
	logo = models.ImageField(upload_to='brands/', blank=True, null=True)
	website = models.URLField(blank=True, null=True)
	is_active = models.BooleanField(default=True)

	class Meta:
		ordering = ['name']

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		if not self.slug:
			self.slug = slugify(self.name)
		super().save(*args, **kwargs)
