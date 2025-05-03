from .base import urlpatterns as base_urlpatterns
from .product import urlpatterns as product_urlpatterns

urlpatterns = [
              ] + product_urlpatterns + base_urlpatterns
