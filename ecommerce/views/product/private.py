from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

import ecommerce.serializers.product.private as private_product_serializer
from decom.permissions import IsOwnerOrReadOnly
from ecommerce.models import Cart, CartItem, WishlistItem, Wishlist


@extend_schema(tags=["private-cart"])
class PrivateCartViewSet(viewsets.ModelViewSet):
	queryset = Cart.objects.all()
	serializer_class = private_product_serializer.CartSerializer
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]
	permission_classes = [IsAuthenticated]

	def get_queryset(self):
		return Cart.objects.filter(user=self.request.user)

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)


@extend_schema(tags=["private-cart"])
class PrivateCartItemViewSet(viewsets.ModelViewSet):
	serializer_class = private_product_serializer.CartItemSerializer
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		return CartItem.objects.filter(cart__user=self.request.user, cart_id=self.kwargs['cart_pk'])

	def perform_create(self, serializer):
		cart = Cart.objects.get(id=self.kwargs['cart_pk'], user=self.request.user)
		serializer.save(cart=cart)


@extend_schema(tags=["private-wish"])
class PrivateWishViewSet(viewsets.ModelViewSet):
	queryset = Wishlist.objects.all()
	serializer_class = private_product_serializer.WishSerializer
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]
	permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

	def get_queryset(self):
		return Wishlist.objects.filter(user=self.request.user)

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)


@extend_schema(tags=["private-wish"])
class PrivateWishListItemViewSet(viewsets.ModelViewSet):
	serializer_class = private_product_serializer.WishItemSerializer
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		return WishlistItem.objects.filter(wishlist__user=self.request.user, wishlist_id=self.kwargs['wish_pk'])

	def perform_create(self, serializer):
		wishlist = Wishlist.objects.get(id=self.kwargs['wish_pk'], user=self.request.user)
		serializer.save(wishlist=wishlist)
