from django.urls import path, include
from rest_framework_nested import routers

from fileserver.views import FileUploadViewSet

router = routers.SimpleRouter()
router.register(r'files', FileUploadViewSet)

urlpatterns = [
    path(r'private/', include(router.urls)),
]
