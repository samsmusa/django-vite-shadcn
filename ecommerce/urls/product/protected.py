from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.product.protected import ProtectedProductViewSet, ProtectedProductReviewViewSet

protected_router = routers.DefaultRouter()

protected_router.register(r'products', ProtectedProductViewSet, basename='protected-products')

protected_product_router = routers.NestedSimpleRouter(protected_router, r'products', lookup='product')
protected_product_router.register(r'reviews', ProtectedProductReviewViewSet, basename='protected-product-reviews')

urlpatterns = [
    path(r'protected/', include(protected_router.urls)),
    path(r'protected/', include(protected_product_router.urls)),
]
