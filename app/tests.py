from django.http import HttpRequest
from django.test import TestCase
from django.core.cache import cache
from django.urls import reverse
from .models import Product
from .views import add_view


class AddViewUnitTest(TestCase):
	def test_add_view_logic(self):
		request = HttpRequest()
		request.GET['a'] = '2'
		request.GET['b'] = '3'

		response = add_view(request)
		self.assertEqual(response.status_code, 200)
		self.assertJSONEqual(response.content, {"result": 5})


class AddViewIntegrationTest(TestCase):
	def test_add_view_endpoint(self):
		response = self.client.get("/add/?a=5&b=7")
		self.assertEqual(response.status_code, 200)
		self.assertJSONEqual(response.content, {"result": 12})


class ProductCacheTest(TestCase):
	def setUp(self):
		Product.objects.create(name="Product A", price=100.0, in_stock=True)
		Product.objects.create(name="Product B", price=200.0, in_stock=True)
		cache.clear()

	def test_cache_behavior(self):
		url = reverse('expensive-products')

		with self.assertLogs(level='INFO') as cm:
			response1 = self.client.get(url)
		self.assertEqual(response1.status_code, 200)
		self.assertIn('Product A', str(response1.content))

		response2 = self.client.get(url)
		self.assertEqual(response2.status_code, 200)
		self.assertEqual(response1.content, response2.content)
