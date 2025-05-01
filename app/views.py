import asyncio
import json
import time

from django.core.cache import cache
from django.http import HttpResponseRedirect, JsonResponse
from django.urls import reverse
from rest_framework.response import Response
from rest_framework.views import APIView

from app.models import Product
from app.serializers import ProductSerializer


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


def expensive_products_view(request):
	cache_key = 'top_expensive_products'
	data = cache.get(cache_key)

	if not data:
		start = time.time()
		data = list(Product.objects.filter(in_stock=True).order_by('-price')[:1000].values())
		cache.set(cache_key, data, timeout=60 * 10)  # cache for 10 minutes
		print(f"Queried DB in {time.time() - start:.2f}s")
	else:
		print("Cache hit!")

	return JsonResponse(data, safe=False)


class ExpensiveProductView(APIView):
	def get(self, request):
		cache_key = "api:expensive_products"
		cached_data = cache.get(cache_key)

		if cached_data:
			return Response(cached_data, status=200)

		# Simulate expensive DB operation
		products = Product.objects.filter(in_stock=True).order_by("-price")[:500]
		data = ProductSerializer(products, many=True).data
		cache.set(cache_key, data, timeout=600)  # Cache for 10 minutes

		return Response(data, status=200)


from django.shortcuts import render


def mock_product_detail(request):
	product = {
		"id": 1,
		"title": "Lymio Casual Shirt for Men || Men Stylish Shirt",
		"img_url": "https://m.media-amazon.com/images/I/61XmAscW1NL._SY450_.jpg",
		"price": 799,
		"mrp": 1299,
	}

	# Mock offer icon (static or external)
	offer_icon_url = "https://cdn-icons-png.flaticon.com/512/727/727399.png"

	# Mock benefits list
	benefits = [
		{
			"img_url": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
			"caption": "Free Delivery"
		},
		{
			"img_url": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png",
			"caption": "Pay on Delivery"
		},
		{
			"img_url": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
			"caption": "10 days Return & Exchange"
		},
		{
			"img_url": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png",
			"caption": "Top Brand"
		},
		{
			"img_url": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
			"caption": "Amazon Delivered"
		},
		{
			"img_url": "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png",
			"caption": "Secure transaction"
		}
	]

	return render(request, 'pages/productDetail/index.html', {
		'product': product,
		'offer_icon_url': offer_icon_url,
		'benefits': benefits,
	})
