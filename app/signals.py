from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Product
from django.core.cache import cache

@receiver([post_save, post_delete], sender=Product)
def clear_expensive_products_cache(sender, **kwargs):
    cache.delete("api:expensive_products")
