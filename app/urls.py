from django.urls import path

from . import views

urlpatterns = [

	path('', views.home_view, name='home'),
	path('settings/', views.settings_view, name='settings'),
	path('switch-theme/', views.switch_theme, name='switch_theme'),
	path('nav-categories/', views.nav_items_api, name='nav-categories'),
	path('sync/', views.sync_view),
	path('async/', views.async_view),
	path('add/', views.add_view),
	path('products/', views.expensive_products_view, name='expensive-products'),
	path('details/', views.mock_product_detail(), name='detail-products'),
]
