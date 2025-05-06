from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django.utils import timezone
from django.db import models
import ecommerce.serializers.product.public as public_product_serializer
from ecommerce.filters.product import ProductFilter
from ecommerce.models import Product, ProductReview, ProductVariant, Discount


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


@extend_schema(tags=["public-product"])
class PublicProductDiscountViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Discount.objects.all()
	serializer_class = public_product_serializer.DiscountSerializer
	permission_classes = [AllowAny]
	lookup_field = 'pk'
	filter_backends = [DjangoFilterBackend]

	def get_queryset(self):
		product_id = self.kwargs['product_pk']
		now = timezone.now()

		return Discount.objects.filter(
			applies_to_products__id=product_id,
			is_active=True,
			valid_from__lte=now
		).filter(
			models.Q(valid_to__gte=now) | models.Q(valid_to__isnull=True),
			models.Q(usage_limit__isnull=True) | models.Q(usage_count__lt=models.F('usage_limit'))
		).distinct()