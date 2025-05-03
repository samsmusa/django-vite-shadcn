from rest_framework_nested import routers

from django.urls import path, include
from ecommerce.views.base.public import PublicCategoryViewSet, PublicBrandViewSet

router = routers.SimpleRouter()
router.register(r'category', PublicCategoryViewSet)
router.register(r'brand', PublicBrandViewSet)

urlpatterns = [
    path(r'public/', include(router.urls)),
]
