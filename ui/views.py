from django_filters.rest_framework.backends import DjangoFilterBackend
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from ui import models, serializer, filters


@extend_schema(tags=["protected-ui"])
class ProtectedUIViewSet(viewsets.ModelViewSet):
	queryset = models.UI.objects.all()
	serializer_class = serializer.UISerializer
	permission_classes = [AllowAny]
	filter_backends = [DjangoFilterBackend]
	filterset_class = filters.UIFilter

