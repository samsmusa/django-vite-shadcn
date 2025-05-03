from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.product.private import PrivateCartViewSet, PrivateWishViewSet, PrivateWishListItemViewSet, \
	PrivateCartItemViewSet

private_router = routers.DefaultRouter()

private_router.register(r'cart', PrivateCartViewSet, basename='private-cart')
private_router.register(r'wish', PrivateWishViewSet, basename='private-wish')

cart_router = routers.NestedSimpleRouter(private_router, r'cart', lookup='cart')
cart_router.register(r'items', PrivateCartItemViewSet, basename='private-cart-items')

wish_router = routers.NestedSimpleRouter(private_router, r'wish', lookup='wish')
wish_router.register(r'items', PrivateWishListItemViewSet, basename='private-wish-items')

urlpatterns = [
	path(r'private/', include(private_router.urls)),
	path(r'private/', include(cart_router.urls)),
	path(r'private/', include(wish_router.urls)),
]
