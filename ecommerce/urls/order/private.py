from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.order.private import PrivateUserOrder

private_router = routers.DefaultRouter()

private_router.register(r'orders', PrivateUserOrder, basename='private-orders')

urlpatterns = [
    path(r'private/', include(private_router.urls)),
]
