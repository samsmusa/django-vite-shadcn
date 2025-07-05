from datetime import timedelta

from django.utils import timezone
from drf_spectacular.utils import extend_schema
from rest_framework import permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

import ecommerce.serializers.order.private as private_order_serializer
from ecommerce.models.order import Order


class IsOrderOwnerOrAdmin(permissions.BasePermission):
    """
    Custom permission to allow only the order owner (user) or admin to access.
    """

    def has_object_permission(self, request, view, obj):
        return request.user and (obj.user == request.user or request.user.is_staff)


@extend_schema(tags=["private-order"])
class PrivateUserOrder(viewsets.ModelViewSet):
    """
    List all orders belonging to the logged-in user.
    """
    queryset = Order.objects.all()
    serializer_class = private_order_serializer.OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Order.objects.prefetch_related("items").filter(user=self.request.user)

    @extend_schema(
        responses=private_order_serializer.OrderStatsSerializer,
        summary="Get order statistics",
        description="Returns number of orders made in the last month, percentage change vs average of previous 3 months.",
    )
    @action(detail=False, methods=["get"], url_path="stats")
    def stats(self, request):
        now = timezone.now()
        one_month_ago = now - timedelta(days=30)
        four_months_ago = now - timedelta(days=120)

        recent_orders = Order.objects.filter(created_at__gte=one_month_ago).count()
        previous_3_months_orders = Order.objects.filter(
            created_at__gte=four_months_ago,
            created_at__lt=one_month_ago
        ).count()

        avg_previous_month = previous_3_months_orders / 3 if previous_3_months_orders else 0
        if avg_previous_month == 0:
            percentage_change = None
        else:
            percentage_change = ((recent_orders - avg_previous_month) / avg_previous_month) * 100

        data = {
            "orders_made": recent_orders,
            "percentage_change": round(percentage_change, 1) if percentage_change is not None else None,
            "vs_previous_month_avg": round(float(avg_previous_month), 1) if avg_previous_month else None,
        }

        serializer = private_order_serializer.OrderStatsSerializer(data)
        return Response(serializer.data)
