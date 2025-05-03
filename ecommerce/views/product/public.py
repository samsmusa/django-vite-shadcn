from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

import ecommerce.serializers.product.public as public_product_serializer
from ecommerce.filters.product import ProductFilter
from ecommerce.models import Product, Cart, CartItem, WishlistItem, Wishlist


@extend_schema(tags=["Products"])
class PublicProductViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Product.objects.all()
	serializer_class = public_product_serializer.ProductSerializer
	permission_classes = [AllowAny]
	lookup_field = 'slug'
	filter_backends = [DjangoFilterBackend]
	filterset_class = ProductFilter

	def get_serializer_class(self):
		if self.action == 'list':
			return public_product_serializer.ProductSerializer
		else:
			return public_product_serializer.ProductDetailSerializer


@extend_schema(tags=["Cart"])
class PublicCartViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Cart.objects.all()
	serializer_class = public_product_serializer.CartSerializer
	permission_classes = [AllowAny]
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]


@extend_schema(tags=["Cart"])
class PublicCartItemViewSet(viewsets.ReadOnlyModelViewSet):
	serializer_class = public_product_serializer.CartItemSerializer
	permission_classes = [AllowAny]
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		return CartItem.objects.filter(cart_id=self.kwargs['cart_pk'])


@extend_schema(tags=["Wish"])
class PublicWishViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Wishlist.objects.all()
	serializer_class = public_product_serializer.WishSerializer
	permission_classes = [AllowAny]
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]


@extend_schema(tags=["Wish"])
class PublicWishListItemViewSet(viewsets.ReadOnlyModelViewSet):
	serializer_class = public_product_serializer.WishItemSerializer
	permission_classes = [AllowAny]
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		return WishlistItem.objects.filter(wishlist_id=self.kwargs['wish_pk'])
