from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

import ecommerce.serializers.base.private as private_base_serializer
from ecommerce.filters.base import AddressFilter
from ecommerce.models import Address


@extend_schema(tags=["private-address"])
class PrivateAddressViewSet(viewsets.ModelViewSet):
	queryset = Address.objects.all()
	serializer_class = private_base_serializer.AddressSerializer
	permission_classes = [AllowAny]
	filter_backends = [DjangoFilterBackend]
	filterset_class = AddressFilter

	def get_queryset(self):
		return Address.objects.filter(user=self.request.user)

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)