from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

import ecommerce.serializers.product.public as public_product_serializer
from ecommerce.filters.product import ProductFilter
from ecommerce.models import Product, ProductReview, ProductVariant


@extend_schema(tags=["public-product"])
class PublicProductViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Product.objects.all()
	serializer_class = public_product_serializer.ProductSerializer
	permission_classes = [AllowAny]
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]
	filterset_class = ProductFilter

	def get_serializer_class(self):
		if self.action == 'list':
			return public_product_serializer.ProductSerializer
		else:
			return public_product_serializer.ProductDetailSerializer


@extend_schema(tags=["public-product"])
class PublicProductReviewViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = ProductReview.objects.all()
	serializer_class = public_product_serializer.ProductReviewSerializer
	permission_classes = [AllowAny]
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		return ProductReview.objects.filter(product__id=self.kwargs['product_pk'])


@extend_schema(tags=["public-product"])
class PublicProductVariantViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = ProductVariant.objects.all()
	serializer_class = public_product_serializer.ProductVariantSerializer
	permission_classes = [AllowAny]
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		return ProductVariant.objects.prefetch_related("attributes").filter(product__id=self.kwargs['product_pk'])
