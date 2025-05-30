from django.urls import path

from . import views

urlpatterns = [

	path('', views.home_view, name='home'),
	path("signup/", views.SignUpView.as_view(), name="signup"),
	path('settings/', views.settings_view, name='settings'),
	path('switch-theme/', views.switch_theme, name='switch_theme'),
	path('nav-categories/', views.nav_items_api, name='nav-categories'),
	path('sync/', views.sync_view),
	path('async/', views.async_view),
	path('add/', views.add_view),
	path('product/<slug:slug>/', views.product_detail_view, name='product_detail'),
	path('products/', views.products_page, name='products'),
	# path('product/<str:product_id>/', views.product_detail_view, name='product_detail'),
	path('checkout/cart/<int:cart_id>/', views.checkout, name='product_buy'),
	path('category/<slug:category_slug>/', views.category_product_list, name='category_products'),
	path("invoice/", views.invoice_view, name="invoice"),
	path("account/", views.account_view, name="account"),
]
