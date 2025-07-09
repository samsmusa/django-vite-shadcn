from django.urls import path, include
from rest_framework_nested import routers

from ui.views import ProtectedUIViewSet

router = routers.SimpleRouter()
router.register(r'ui', ProtectedUIViewSet)

urlpatterns = [
    path(r'protected/', include(router.urls)),
]
