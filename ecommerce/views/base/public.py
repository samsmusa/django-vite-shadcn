from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

import ecommerce.serializers.base.public as public_base_serializer
from ecommerce.filters.base import CategoryFilter
from ecommerce.models import Category, Brand


@extend_schema(tags=["Category"])
class PublicCategoryViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Category.objects.prefetch_related('children')
	serializer_class = public_base_serializer.CategorySerializer
	permission_classes = [AllowAny]
	filter_backends = [DjangoFilterBackend]
	filterset_class = CategoryFilter


@extend_schema(tags=["Brand"])
class PublicBrandViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Brand.objects.all()
	serializer_class = public_base_serializer.BrandSerializer
	permission_classes = [AllowAny]
	lookup_field = 'slug'
