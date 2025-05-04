from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.product.public import PublicProductViewSet, PublicProductReviewViewSet

router = routers.DefaultRouter()
router.register(r'products', PublicProductViewSet)

product_router = routers.NestedSimpleRouter(router, r'products', lookup='product')
product_router.register(r'reviews', PublicProductReviewViewSet, basename='product-reviews')

urlpatterns = [
    path(r'public/', include(router.urls)),
    path(r'public/', include(product_router.urls)),
]
