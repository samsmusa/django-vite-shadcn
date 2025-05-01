import random

from app.models import Product


def populate_products(n=1_000_000, batch_size=10_000):
	products = []
	for i in range(1, n + 1):
		products.append(Product(
			name=f"Product {i}",
			price=random.uniform(10.0, 500.0),
			in_stock=bool(random.getrandbits(1))
		))

		if i % batch_size == 0:
			Product.objects.bulk_create(products)
			print(f"Inserted {i} records...")
			products = []

	if products:
		Product.objects.bulk_create(products)
		print(f"Inserted final batch of {len(products)}")
