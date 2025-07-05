from .base import urlpatterns as base_urlpatterns
from .product import urlpatterns as product_urlpatterns
from .order import urlpatterns as order_urlpatterns

urlpatterns = [
              ] + product_urlpatterns + base_urlpatterns + order_urlpatterns
