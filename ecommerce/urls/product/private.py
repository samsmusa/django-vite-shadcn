from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.product.private import PrivateCartViewSet, PrivateWishViewSet, PrivateWishListItemViewSet, \
    PrivateCartItemViewSet, PrivateProductReviewViewSet

private_router = routers.DefaultRouter()

private_router.register(r'products', PrivateCartViewSet, basename='private-products')

private_product_router = routers.NestedSimpleRouter(private_router, r'products', lookup='product')
private_product_router.register(r'reviews', PrivateProductReviewViewSet, basename='private-product-reviews')

private_router.register(r'cart', PrivateCartViewSet, basename='private-cart')
private_router.register(r'wish', PrivateWishViewSet, basename='private-wish')

cart_router = routers.NestedSimpleRouter(private_router, r'cart', lookup='cart')
cart_router.register(r'items', PrivateCartItemViewSet, basename='private-cart-items')

wish_router = routers.NestedSimpleRouter(private_router, r'wish', lookup='wish')
wish_router.register(r'items', PrivateWishListItemViewSet, basename='private-wish-items')

urlpatterns = [
    path(r'private/', include(private_router.urls)),
    path(r'private/', include(private_product_router.urls)),
    path(r'private/', include(cart_router.urls)),
    path(r'private/', include(wish_router.urls)),
]
