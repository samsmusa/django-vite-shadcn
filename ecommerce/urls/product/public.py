from rest_framework_nested import routers

from django.urls import path, include
from ecommerce.views.product.public import PublicProductViewSet

router = routers.SimpleRouter()
router.register(r'products', PublicProductViewSet)

urlpatterns = [
    path(r'public/', include(router.urls)),
]
