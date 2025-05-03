from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

import ecommerce.serializers.product.private as private_product_serializer
from ecommerce.models import Cart, CartItem, WishlistItem, Wishlist


@extend_schema(tags=["private-cart"])
class PrivateCartViewSet(viewsets.ModelViewSet):
	queryset = Cart.objects.all()
	serializer_class = private_product_serializer.CartSerializer
	permission_classes = [AllowAny]
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]


@extend_schema(tags=["private-cart"])
class PrivateCartItemViewSet(viewsets.ModelViewSet):
	serializer_class = private_product_serializer.CartItemSerializer
	permission_classes = [AllowAny]
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		return CartItem.objects.filter(cart_id=self.kwargs['cart_pk'])


@extend_schema(tags=["private-wish"])
class PrivateWishViewSet(viewsets.ModelViewSet):
	queryset = Wishlist.objects.all()
	serializer_class = private_product_serializer.WishSerializer
	permission_classes = [AllowAny]
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]


@extend_schema(tags=["private-wish"])
class PrivateWishListItemViewSet(viewsets.ModelViewSet):
	serializer_class = private_product_serializer.WishItemSerializer
	permission_classes = [AllowAny]
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		return WishlistItem.objects.filter(wishlist_id=self.kwargs['wish_pk'])
