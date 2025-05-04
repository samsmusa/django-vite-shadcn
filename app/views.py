import asyncio
import json
import time
from datetime import date

from django.core.cache import cache
from django.http import HttpResponseRedirect, JsonResponse
from django.urls import reverse
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView

from app.serializers import ProductSerializer, DiscountSerializer

#
# class DiscountViewSet(viewsets.ModelViewSet):
# 	queryset = Discount.objects.all()
# 	serializer_class = DiscountSerializer
#
# 	@action(detail=False, methods=['get'], url_path='by-name/(?P<name>[^/.]+)')
# 	def get_by_name(self, request, name=None):
# 		try:
# 			discount = Discount.objects.get(name=name)
# 			serializer = self.get_serializer(discount)
# 			return Response(serializer.data)
# 		except Discount.DoesNotExist:
# 			return Response({'detail': 'Discount not found.'}, status=status.HTTP_404_NOT_FOUND)


def home_view(request):
	initial_data = [
		{"id": 1, "name": "Item 1"},
		{"id": 2, "name": "Item 2"}
	]

	context = {
		'initial_data': json.dumps(initial_data),
	}
	return render(request, 'pages/home/index.html', context)


def settings_view(request):
	return render(request, 'settings.html', {})


def switch_theme(request):
	redirect_url = request.META.get('HTTP_REFERER', reverse('home'))

	new_theme = request.GET.get('theme', 'light')
	theme_color = request.GET.get('theme_color', 'Orange')

	print(new_theme, theme_color)
	if new_theme not in ['light', 'dark']:
		new_theme = 'light'

	response = HttpResponseRedirect(redirect_url)

	max_age = 365 * 24 * 60 * 60

	response.set_cookie(
		'theme',
		new_theme,
		max_age=max_age,

		samesite='Lax'
	)
	response.set_cookie(
		'theme_color',
		theme_color,
		max_age=max_age,

		samesite='Lax'
	)

	return response


def nav_items_api(request):
	items = [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}]
	return JsonResponse(list(items), safe=False)


def sync_view(request):
	time.sleep(2)
	return JsonResponse({'status': 'done', 'type': 'sync'})


async def async_view(request):
	await asyncio.sleep(2)
	return JsonResponse({'status': 'done', 'type': 'async'})


def add_view(request):
	a = int(request.GET.get("a", 0))
	b = int(request.GET.get("b", 0))
	return JsonResponse({"result": a + b})


# def expensive_products_view(request):
# 	cache_key = 'top_expensive_products'
# 	data = cache.get(cache_key)
#
# 	if not data:
# 		start = time.time()
# 		data = list(Product.objects.filter(in_stock=True).order_by('-price')[:1000].values())
# 		cache.set(cache_key, data, timeout=60 * 10)  # cache for 10 minutes
# 		print(f"Queried DB in {time.time() - start:.2f}s")
# 	else:
# 		print("Cache hit!")
#
# 	return JsonResponse(data, safe=False)
#
#
# class ExpensiveProductView(APIView):
# 	def get(self, request):
# 		cache_key = "api:expensive_products"
# 		cached_data = cache.get(cache_key)
#
# 		if cached_data:
# 			return Response(cached_data, status=200)
#
# 		# Simulate expensive DB operation
# 		products = Product.objects.filter(in_stock=True).order_by("-price")[:500]
# 		data = ProductSerializer(products, many=True).data
# 		cache.set(cache_key, data, timeout=600)  # Cache for 10 minutes
#
# 		return Response(data, status=200)


from django.shortcuts import render

from django.views.decorators.http import require_GET


@require_GET
def product_detail_view(request, product_id):
	product = {
		"id": product_id,
		"title": "Wireless Bluetooth Headphones Over Ear",
		"img_url": "/static/images/mock_product.jpg",
		"price": 2199,
		"mrp": 4999,
		"description": """Experience immersive sound quality with our Wireless Bluetooth Headphones. Designed for comfort and long listening sessions, they offer deep bass, clear mids, and crisp highs.""",
		"offers": [
			"10% Instant Discount with XYZ Bank Cards",
			"Flat ₹500 off on your first purchase",
			"No Cost EMI available on orders above ₹3000"
		],
		"specifications": [
			{"name": "Connectivity", "value": "Bluetooth 5.0"},
			{"name": "Battery Life", "value": "Up to 20 hours"},
			{"name": "Charging Time", "value": "2 hours"},
			{"name": "Microphone", "value": "Built-in"},
			{"name": "Noise Cancellation", "value": "Passive"}
		],
		"reviews": [
			{"user": "Amit Sharma", "rating": 4,
			 "text": "Good sound quality and comfortable fit. Battery life is great too."},
			{"user": "Neha Verma", "rating": 5, "text": "Excellent headphones for the price. Totally worth it."},
			{"user": "Ravi Singh", "rating": 3, "text": "Build quality could be better, but audio is nice."}
		],
		"frequently_bought": [
			{"id": 102, "title": "Carrying Case for Headphones", "img_url": "/static/images/case.jpg"},
			{"id": 103, "title": "USB-C Fast Charger", "img_url": "/static/images/charger.jpg"}
		],
		"similar_products": [
			{"id": 104, "title": "On-Ear Wireless Headphones", "img_url": "/static/images/similar1.jpg"},
			{"id": 105, "title": "Noise Cancelling Headset", "img_url": "/static/images/similar2.jpg"},
			{"id": 106, "title": "Gaming Headphones with Mic", "img_url": "/static/images/similar3.jpg"}
		],
		"compare_items": [
			{
				"title": "Noise ColorFit Pro 4 Headphones",
				"img_url": "/static/images/compare1.jpg",
				"price": 2499,
				"rating": 4,
				"rating_count": 312,
				"battery": "15 hrs",
				"bluetooth": "5.0"
			},
			{
				"title": "boAt Rockerz 450 Wireless",
				"img_url": "/static/images/compare2.jpg",
				"price": 1899,
				"rating": 4,
				"rating_count": 1200,
				"battery": "20 hrs",
				"bluetooth": "5.2"
			},
			{
				"title": "JBL Tune 510BT",
				"img_url": "/static/images/compare3.jpg",
				"price": 3299,
				"rating": 5,
				"rating_count": 850,
				"battery": "40 hrs",
				"bluetooth": "5.1"
			}
		]

	}

	# Example: Icon URL for offers
	offer_icon_url = "/static/icons/offer-badge.png"

	return render(request, 'pages/productDetail/index.html', {
		"product": product,
		"offer_icon_url": offer_icon_url,
	})


def category_product_list(request, category_slug):
	# Mock category data
	category = {
		'name': category_slug.replace('-', ' ').title(),
		'slug': category_slug
	}

	# Mock product data
	sub_categories = [
		{
			'name': 'Wireless Mouse',
			'slug': 'wireless-mouse',
		},
		{
			'name': 'Bluetooth Headphones',
			'slug': 'bluetooth-headphones',
		},
		{
			'name': 'Mechanical Keyboard',
			'slug': 'mechanical-keyboard',
		},
		{
			'name': 'USB-C Hub',
			'slug': 'usb-c-hub',
		},
	]

	return render(request, 'pages/categoryProducts/index.html', {
		'category': category,
		'categories': sub_categories,
	})


def invoice_view(request):
	order = {
		"order_number": "123-4567890-1234567",
		"date": date.today().strftime("%Y-%m-%d"),
		"customer_name": "John Doe",
		"address": "123 Example St",
		"city": "New York",
		"zip_code": "10001",
		"country": "USA",
		"items": [
			{"name": "Echo Dot", "asin": "B07FZ8S74R", "quantity": 1, "unit_price": 49.99, "total_price": 49.99},
			{"name": "HDMI Cable", "asin": "B014I8UQJY", "quantity": 2, "unit_price": 9.99, "total_price": 19.98},
		],
		"subtotal": 69.97,
		"shipping_cost": 5.99,
		"total": 75.96,
	}

	return render(request, "pages/invoice/index.html", {"order": order})
