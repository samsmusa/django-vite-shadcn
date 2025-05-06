from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.product.public import PublicProductViewSet, PublicProductReviewViewSet, \
    PublicProductVariantViewSet, PublicProductDiscountViewSet

router = routers.DefaultRouter()
router.register(r'products', PublicProductViewSet)

product_router = routers.NestedSimpleRouter(router, r'products', lookup='product')
product_router.register(r'reviews', PublicProductReviewViewSet, basename='product-reviews')
product_router.register(r'variants', PublicProductVariantViewSet, basename='product-variants')
product_router.register(r'discounts', PublicProductDiscountViewSet, basename='product-discounts')

urlpatterns = [
    path(r'public/', include(router.urls)),
    path(r'public/', include(product_router.urls)),
]
