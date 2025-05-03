from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.product.public import PublicProductViewSet, PublicCartViewSet, PublicWishViewSet, PublicWishListItemViewSet, PublicCartItemViewSet

router = routers.DefaultRouter()
router.register(r'products', PublicProductViewSet)
router.register(r'cart', PublicCartViewSet, basename='cart')
router.register(r'wish', PublicWishViewSet, basename='wish')

cart_router = routers.NestedSimpleRouter(router, r'cart', lookup='cart')
cart_router.register(r'items', PublicCartItemViewSet, basename='cart-items')

wish_router = routers.NestedSimpleRouter(router, r'wish', lookup='wish')
wish_router.register(r'items', PublicWishListItemViewSet, basename='cart-items')

urlpatterns = [
	path(r'public/', include(router.urls)),
	path(r'public/', include(cart_router.urls)),
	path(r'public/', include(wish_router.urls)),
]
