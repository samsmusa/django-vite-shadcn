from django.urls import path
from . import views

urlpatterns = [

    path('', views.home_view, name='home'),
    path('settings/', views.settings_view, name='settings'),
    path('switch-theme/', views.switch_theme, name='switch_theme'),
    path('nav-categories/', views.nav_items_api, name='nav-categories'),
]
