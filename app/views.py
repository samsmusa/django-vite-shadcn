import asyncio
import json
import time
from datetime import date

from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.views.decorators.http import require_GET

from ecommerce.models import Product


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

@require_GET
def product_detail_view(request, slug):
	product = get_object_or_404(
		Product.objects.select_related("brand", "category", "vendor").prefetch_related("variants"),
		slug=slug
	)
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
