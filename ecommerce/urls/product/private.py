from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.product.private import PrivateCartViewSet, PrivateWishViewSet, PrivateWishListItemViewSet, \
	PrivateCartItemViewSet

router = routers.DefaultRouter()
router.register(r'cart', PrivateCartViewSet, basename='cart')
router.register(r'wish', PrivateWishViewSet, basename='wish')

cart_router = routers.NestedSimpleRouter(router, r'cart', lookup='cart')
cart_router.register(r'items', PrivateCartItemViewSet, basename='cart-items')

wish_router = routers.NestedSimpleRouter(router, r'wish', lookup='wish')
wish_router.register(r'items', PrivateWishListItemViewSet, basename='cart-items')

urlpatterns = [
	path(r'private/', include(router.urls)),
	path(r'private/', include(cart_router.urls)),
	path(r'private/', include(wish_router.urls)),
]
