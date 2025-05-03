from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

import ecommerce.serializers.product.public as public_product_serializer
from ecommerce.filters.product import ProductFilter
from ecommerce.models import Product


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
