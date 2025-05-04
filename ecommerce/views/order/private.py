from rest_framework import generics, permissions, mixins
from rest_framework.exceptions import PermissionDenied
from ecommerce.models.order import Order
import ecommerce.serializers.order.private as private_order_serializer


class IsOrderOwnerOrAdmin(permissions.BasePermission):
    """
    Custom permission to allow only the order owner (user) or admin to access.
    """

    def has_object_permission(self, request, view, obj):
        return request.user and (obj.user == request.user or request.user.is_staff)


class PrivateUserOrder(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin,generics.GenericAPIView,):
    """
    List all orders belonging to the logged-in user.
    """
    queryset = Order.objects.all()
    serializer_class = private_order_serializer.OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Order.objects.prefetch_related("items").filter(user=self.request.user)

