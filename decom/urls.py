"""
URL configuration for decom project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from django.conf import settings
urlpatterns = [
	path('admin/', admin.site.urls),
	path("accounts/", include("django.contrib.auth.urls")),
	path("__reload__/", include("django_browser_reload.urls")),
	path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
	path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
	# Optional UI:
	path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
	path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

	path('api/', include('ecommerce.urls')),
	path('api/', include('account.urls')),
	path('api/', include('ui.urls')),
	path('api/', include('fileserver.urls')),
	path("", include("app.urls")),
]

if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)