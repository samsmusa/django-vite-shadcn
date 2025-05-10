from django.urls import path, include
from rest_framework_nested import routers

from ecommerce.views.base.private import PrivateAddressViewSet

router = routers.SimpleRouter()
router.register(r'address', PrivateAddressViewSet)

urlpatterns = [
	path(r'private/', include(router.urls)),
]
