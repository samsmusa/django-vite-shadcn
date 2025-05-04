import datetime
import decimal
import random
import uuid

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.db import transaction
from django.utils import timezone
from django.utils.text import slugify
from faker import Faker

from account.models import Vendor
# Import your models
from ecommerce.models import (
	Address, Category, Brand, ProductAttribute, ProductAttributeValue,
	Product, ProductImage, ProductVariant, ProductVariantAttribute,
	Discount, Cart, CartItem, Order, OrderItem, Payment, ProductReview,
	Wishlist, WishlistItem, CustomerAnalytics, ProductView, SearchQuery,
	Inventory, InventoryLog, Supplier, PurchaseOrder, PurchaseOrderItem,
	Refund, RefundItem, ShippingMethod, ShippingZone, ShippingRate,
	ProductRecommendation, SalesReport, ProductPerformance, UserSegment,
	MarketingCampaign, AbandonedCart, SiteConfiguration
)

User = get_user_model()
fake = Faker()


class Command(BaseCommand):
	help = 'Seeds the database with sample e-commerce data'

	def add_arguments(self, parser):
		parser.add_argument('--categories', type=int, default=10, help='Number of categories to create')
		parser.add_argument('--brands', type=int, default=15, help='Number of brands to create')
		parser.add_argument('--products', type=int, default=100, help='Number of products to create')
		parser.add_argument('--orders', type=int, default=200, help='Number of orders to create')
		parser.add_argument('--suppliers', type=int, default=8, help='Number of suppliers to create')
		parser.add_argument('--clear', action='store_true', help='Clear existing data before seeding')

	def handle(self, *args, **options):
		if options['clear']:
			self.clear_data()

		# Create base data
		self.create_site_configuration()
		self.create_categories(options['categories'])
		self.create_brands(options['brands'])
		self.create_product_attributes()
		self.create_shipping_methods()
		self.create_shipping_zones()
		self.create_suppliers(options['suppliers'])

		# Create products and related data
		self.create_products(options['products'])
		self.create_discounts()

		self.stdout.write(self.style.SUCCESS('Successfully seeded the database!'))

	def clear_data(self):
		"""Clear existing data from all models"""
		self.stdout.write('Clearing existing data...')

		# Clear data in reverse order of dependencies
		MarketingCampaign.objects.all().delete()
		UserSegment.objects.all().delete()
		ProductPerformance.objects.all().delete()
		SalesReport.objects.all().delete()
		ProductRecommendation.objects.all().delete()
		RefundItem.objects.all().delete()
		Refund.objects.all().delete()
		PurchaseOrderItem.objects.all().delete()
		PurchaseOrder.objects.all().delete()
		ProductReview.objects.all().delete()
		AbandonedCart.objects.all().delete()
		SearchQuery.objects.all().delete()
		ProductView.objects.all().delete()
		WishlistItem.objects.all().delete()
		Wishlist.objects.all().delete()
		OrderItem.objects.all().delete()
		Payment.objects.all().delete()
		Order.objects.all().delete()
		CartItem.objects.all().delete()
		Cart.objects.all().delete()
		CustomerAnalytics.objects.all().delete()
		ShippingRate.objects.all().delete()
		ShippingZone.objects.all().delete()
		ShippingMethod.objects.all().delete()
		InventoryLog.objects.all().delete()
		Inventory.objects.all().delete()
		ProductVariantAttribute.objects.all().delete()
		ProductVariant.objects.all().delete()
		ProductImage.objects.all().delete()
		Product.objects.all().delete()
		ProductAttributeValue.objects.all().delete()
		ProductAttribute.objects.all().delete()
		Discount.objects.all().delete()
		Supplier.objects.all().delete()
		Brand.objects.all().delete()
		Category.objects.all().delete()
		Address.objects.all().delete()
		SiteConfiguration.objects.all().delete()

		self.stdout.write(self.style.SUCCESS('Data cleared successfully!'))

	def create_site_configuration(self):
		"""Create site configuration"""
		self.stdout.write('Creating site configuration...')

		SiteConfiguration.objects.create(
			site_name='PyCommerce',
			contact_email='support@pycommerce.example',
			support_phone='+1-800-PYCOMM',
			default_currency='USD',
			base_country='US',
			enable_reviews=True,
			enable_wishlists=True,
			enable_tax_calculation=True,
			default_tax_rate=decimal.Decimal('7.5'),
			enable_guest_checkout=True,
			meta_description='PyCommerce - The best e-commerce platform built with Django',
			meta_keywords='e-commerce, online shopping, django, python',
		)

	def create_categories(self, count):
		"""Create product categories with hierarchy"""
		self.stdout.write(f'Creating {count} categories...')

		main_categories = [
			'Electronics', 'Clothing', 'Home & Garden', 'Books',
			'Sports & Outdoors', 'Beauty & Personal Care', 'Toys & Games',
			'Health & Wellness', 'Automotive', 'Jewelry'
		]

		# Create main categories
		for i in range(min(count, len(main_categories))):
			category_name = main_categories[i]
			try:
				Category.objects.create(
					name=category_name,
					slug=slugify(category_name),
					description=fake.paragraph(),
					is_active=True,
					meta_title=f"{category_name} - Shop the Best {category_name} Online",
					meta_description=f"Shop our extensive collection of {category_name.lower()} products. Free shipping on orders over $50.",
				)
			except Exception as e:
				print(e)

		# Create subcategories
		main_categories = list(Category.objects.filter(parent=None))

		subcategories = {
			'Electronics': ['Smartphones', 'Laptops', 'Tablets', 'Cameras', 'Audio'],
			'Clothing': ['Men', 'Women', 'Kids', 'Shoes', 'Accessories'],
			'Home & Garden': ['Furniture', 'Kitchen', 'Decor', 'Bedding', 'Gardening'],
			'Books': ['Fiction', 'Non-Fiction', 'Children', 'Textbooks', 'Magazines'],
			'Sports & Outdoors': ['Fitness', 'Camping', 'Team Sports', 'Water Sports', 'Cycling'],
			'Beauty & Personal Care': ['Skincare', 'Makeup', 'Hair Care', 'Fragrance', 'Bath & Body'],
			'Toys & Games': ['Action Figures', 'Board Games', 'Dolls', 'Educational', 'Outdoor Toys'],
			'Health & Wellness': ['Vitamins', 'Supplements', 'Medical Supplies', 'Personal Care', 'Fitness Trackers'],
			'Automotive': ['Interior', 'Exterior', 'Tools', 'Electronics', 'Accessories'],
			'Jewelry': ['Necklaces', 'Rings', 'Earrings', 'Bracelets', 'Watches']
		}

		for main_category in main_categories:
			if main_category.name in subcategories:
				for subcat_name in subcategories[main_category.name]:
					try:
						Category.objects.create(
							name=subcat_name,
							slug=slugify(f"{main_category.name}-{subcat_name}"),
							description=fake.paragraph(),
							parent=main_category,
							is_active=True,
							meta_title=f"{subcat_name} {main_category.name} - Shop Online",
							meta_description=f"Explore our {subcat_name.lower()} {main_category.name.lower()} collection. Quality products, competitive prices.",
						)
					except Exception as e:
						print(e)

	def create_brands(self, count):
		"""Create product brands"""
		self.stdout.write(f'Creating {count} brands...')

		sample_brands = [
			'TechPro', 'StyleFusion', 'HomeEssentials', 'BookWorld',
			'SportsElite', 'BeautyGlow', 'PlayMaster', 'WellnessPlus',
			'AutoTech', 'JewelCraft', 'FashionForward', 'ElectroLuxe',
			'GardenMaster', 'ReadingRealm', 'FitnessPro', 'GlamourGlow'
		]

		for i in range(min(count, len(sample_brands))):
			brand_name = sample_brands[i]
			try:
				Brand.objects.create(
					name=brand_name,
					slug=slugify(brand_name),
					description=fake.paragraph(),
					website=f"https://www.{slugify(brand_name)}.example",
					is_active=True,
				)
			except Exception as e:
				print(e)

		# Create more random brands if needed
		for i in range(max(0, count - len(sample_brands))):
			brand_name = f"{fake.word().capitalize()}{fake.word().capitalize()}"
			try:
				Brand.objects.create(
					name=brand_name,
					slug=slugify(brand_name),
					description=fake.paragraph(),
					website=f"https://www.{slugify(brand_name)}.example",
					is_active=True,
				)
			except Exception as e:
				print(e)

	def create_product_attributes(self):
		"""Create product attributes and their values"""
		self.stdout.write('Creating product attributes...')

		attributes = {
			'Color': ['Red', 'Blue', 'Green', 'Black', 'White', 'Gray', 'Yellow', 'Purple', 'Pink', 'Orange'],
			'Size': ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
			'Material': ['Cotton', 'Polyester', 'Leather', 'Wool', 'Silk', 'Denim', 'Linen', 'Nylon'],
			'Storage': ['32GB', '64GB', '128GB', '256GB', '512GB', '1TB'],
			'RAM': ['4GB', '8GB', '16GB', '32GB', '64GB'],
			'Resolution': ['HD', 'Full HD', '2K', '4K', '8K'],
			'Weight': ['Light', 'Medium', 'Heavy'],
		}

		for attr_name, values in attributes.items():
			attribute = ProductAttribute.objects.create(
				name=attr_name,
				description=f"{attr_name} attribute for products",
			)

			for value in values:
				try:
					ProductAttributeValue.objects.create(
						attribute=attribute,
						value=value,
					)
				except Exception as e:
					print(e)

	def create_shipping_methods(self):
		"""Create shipping methods"""
		self.stdout.write('Creating shipping methods...')

		shipping_methods = [
			{
				'name': 'Standard Shipping',
				'description': 'Standard shipping, 3-5 business days',
				'carrier': 'Various',
				'base_price': decimal.Decimal('5.99'),
				'estimated_delivery_days': 5,
			},
			{
				'name': 'Express Shipping',
				'description': 'Express shipping, 2-3 business days',
				'carrier': 'Various',
				'base_price': decimal.Decimal('9.99'),
				'estimated_delivery_days': 3,
			},
			{
				'name': 'Next Day Delivery',
				'description': 'Next business day delivery',
				'carrier': 'Premium Couriers',
				'base_price': decimal.Decimal('19.99'),
				'estimated_delivery_days': 1,
			},
			{
				'name': 'Free Shipping',
				'description': 'Free shipping on orders over $50',
				'carrier': 'Various',
				'base_price': decimal.Decimal('0.00'),
				'estimated_delivery_days': 7,
			}
		]

		for method_data in shipping_methods:
			try:
				ShippingMethod.objects.create(**method_data)
			except Exception as e:
				print(e)

	def create_shipping_zones(self):
		"""Create shipping zones and rates"""
		self.stdout.write('Creating shipping zones and rates...')

		zones = [
			{
				'name': 'Domestic',
				'countries': 'US',
			},
			{
				'name': 'North America',
				'countries': 'CA,MX',
			},
			{
				'name': 'Europe',
				'countries': 'GB,DE,FR,IT,ES',
			},
			{
				'name': 'Rest of World',
				'countries': '*',
			}
		]

		for zone_data in zones:
			zone = ShippingZone.objects.create(**zone_data)

			# Create shipping rates for each method in this zone
			for method in ShippingMethod.objects.all():
				base_rate = decimal.Decimal(method.base_price)

				# Adjust rate based on zone
				if zone.name == 'North America':
					multiplier = decimal.Decimal("1.5")
				elif zone.name == 'Europe':
					multiplier = decimal.Decimal("2.0")
				elif zone.name == 'Rest of World':
					multiplier = decimal.Decimal("2.5")
				else:
					multiplier = decimal.Decimal("1.0")

				# Create weight brackets
				weight_brackets = [
					(0, 1, base_rate * multiplier),
					(1, 5, base_rate * multiplier * decimal.Decimal("1.5")),
					(5, 10, base_rate * multiplier * decimal.Decimal("2")),
					(10, 20, base_rate * multiplier * decimal.Decimal("3")),
					(20, 50, base_rate * multiplier * decimal.Decimal("4")),
				]

				for min_w, max_w, rate in weight_brackets:
					try:
						ShippingRate.objects.create(
							shipping_method=method,
							shipping_zone=zone,
							min_weight=decimal.Decimal(str(min_w)),
							max_weight=decimal.Decimal(str(max_w)),
							rate=rate.quantize(decimal.Decimal('0.01')),
						)
					except Exception as e:
						print(e)

	def create_suppliers(self, count):
		"""Create product suppliers"""
		self.stdout.write(f'Creating {count} suppliers...')

		for i in range(count):
			company_name = f"{fake.word().capitalize()} {random.choice(['Supply', 'Distributors', 'Wholesale', 'Trading', 'Imports'])}"
			try:
				Supplier.objects.create(
					name=company_name,
					contact_name=fake.name(),
					email=fake.company_email(),
					phone=fake.phone_number(),
					website=f"https://www.{slugify(company_name)}.example",
					address=f"{fake.street_address()}, {fake.city()}, {fake.state()}, {fake.postcode()}",
					account_number=f"ACC-{fake.ean(length=8)}",
					minimum_order_quantity=random.choice([10, 25, 50, 100]),
					lead_time_days=random.choice([3, 5, 7, 10, 14, 21]),
					is_active=True,
					notes=fake.paragraph() if random.random() > 0.5 else None,
				)
			except Exception as e:
				print(e)

	def create_products(self, count):
		"""Create products with variants, images, and inventory"""
		self.stdout.write(f'Creating {count} products...')

		all_categories = list(Category.objects.all())
		all_brands = list(Brand.objects.all())
		all_suppliers = list(Supplier.objects.all())
		vendors = list(Vendor.objects.all())


		# Get attributes by name for easy reference
		color_attribute = ProductAttribute.objects.filter(name='Color').first()
		size_attribute = ProductAttribute.objects.filter(name='Size').first()
		material_attribute = ProductAttribute.objects.filter(name='Material').first()
		storage_attribute = ProductAttribute.objects.filter(name='Storage').first()
		ram_attribute = ProductAttribute.objects.filter(name='RAM').first()

		if color_attribute:
			color_values = list(color_attribute.values.all())
		if size_attribute:
			size_values = list(size_attribute.values.all())
		if material_attribute:
			material_values = list(material_attribute.values.all())
		if storage_attribute:
			storage_values = list(storage_attribute.values.all())
		if ram_attribute:
			ram_values = list(ram_attribute.values.all())

		for i in range(count):
			try:
				with transaction.atomic():
					category = random.choice(all_categories)
					brand = random.choice(all_brands)

					# Generate product name based on category
					if 'Electronics' in category.name or category.parent and 'Electronics' in category.parent.name:
						product_name = f"{brand.name} {fake.word().capitalize()} {random.choice(['Pro', 'Elite', 'Max', 'Ultra', ''])}"
					elif 'Clothing' in category.name or category.parent and 'Clothing' in category.parent.name:
						product_name = f"{brand.name} {fake.word().capitalize()} {random.choice(['Shirt', 'Pants', 'Jacket', 'Dress', 'Sweater'])}"
					else:
						product_name = f"{brand.name} {fake.word().capitalize()} {fake.word().capitalize()}"

					product = Product.objects.create(
						vendor=random.choice(vendors),
						name=product_name,
						slug=slugify(f"{product_name}-{uuid.uuid4().hex[:8]}"),
						sku=f"SKU-{fake.ean(length=8)}",
						brand=brand,
						category=category,
						description='\n\n'.join(fake.paragraphs(nb=5)),
						short_description=fake.paragraph(),
						price=decimal.Decimal(random.uniform(9.99, 999.99)).quantize(decimal.Decimal('0.01')),
						compare_price=decimal.Decimal(random.uniform(9.99, 1999.99)).quantize(
							decimal.Decimal('0.01')) if random.random() > 0.7 else None,
						cost_price=decimal.Decimal(random.uniform(5.99, 499.99)).quantize(decimal.Decimal('0.01')),
						is_active=True,
						is_featured=random.random() > 0.8,
						is_digital=random.random() > 0.9,
						requires_shipping=random.random() > 0.1,
						tax_class='standard',
						inventory_tracking=True,
						stock_quantity=random.randint(0, 200),
						low_stock_threshold=random.randint(5, 20),
						weight=decimal.Decimal(random.uniform(0.1, 20)).quantize(
							decimal.Decimal('0.01')) if random.random() > 0.2 else None,
						width=decimal.Decimal(random.uniform(1, 100)).quantize(
							decimal.Decimal('0.01')) if random.random() > 0.2 else None,
						height=decimal.Decimal(random.uniform(1, 100)).quantize(
							decimal.Decimal('0.01')) if random.random() > 0.2 else None,
						depth=decimal.Decimal(random.uniform(1, 100)).quantize(
							decimal.Decimal('0.01')) if random.random() > 0.2 else None,
						meta_title=f"Buy {product_name} | PyCommerce",
						meta_description=f"Shop {product_name} at the best price. Quality guaranteed.",
						meta_keywords=f"{product_name}, {category.name}, {brand.name}, buy online",
					)

					# Create product images (dummy paths)
					for j in range(random.randint(1, 5)):
						ProductImage.objects.create(
							product=product,
							image=f"products/product_{product.id}_{j + 1}.jpg",
							alt_text=f"{product.name} image {j + 1}",
							is_primary=j == 0,
							sort_order=j,
						)

					# Create inventory record
					supplier = random.choice(all_suppliers)
					inventory = Inventory.objects.create(
						product=product,
						sku=product.sku,
						quantity=product.stock_quantity,
						reserved_quantity=0,
						reorder_level=product.low_stock_threshold,
						reorder_quantity=product.low_stock_threshold * 2,
						last_restock_date=timezone.now() - datetime.timedelta(days=random.randint(1, 90)),
						warehouse_location=f"Row {random.choice('ABCDEFGH')}-{random.randint(1, 20)}-{random.randint(1, 5)}",
						supplier=supplier,
					)

					# Log initial inventory
					InventoryLog.objects.create(
						inventory=inventory,
						quantity_change=product.stock_quantity,
						operation_type='restock',
						reference=f"Initial Stock",
						notes="Initial inventory setup",
					)

					# Decide which attributes to use based on category
					category_name = category.name
					if category.parent:
						category_name = f"{category.parent.name} - {category.name}"

					variant_attributes = []
					if 'Clothing' in category_name and size_attribute:
						variant_attributes.append(('size', size_attribute, random.sample(size_values,
						                                                                 min(len(size_values),
						                                                                     random.randint(3, 6)))))
					if (color_attribute and random.random() > 0.3):
						variant_attributes.append(('color', color_attribute, random.sample(color_values,
						                                                                   min(len(color_values),
						                                                                       random.randint(2, 5)))))
					if 'Electronics' in category_name and storage_attribute:
						variant_attributes.append(('storage', storage_attribute, random.sample(storage_values,
						                                                                       min(len(storage_values),
						                                                                           random.randint(2,
						                                                                                          4)))))
					if 'Electronics' in category_name and ram_attribute and random.random() > 0.5:
						variant_attributes.append(('ram', ram_attribute, random.sample(ram_values, min(len(ram_values),
						                                                                               random.randint(2,
						                                                                                              3)))))
					if 'Clothing' in category_name and material_attribute and random.random() > 0.7:
						variant_attributes.append(('material', material_attribute, random.sample(material_values,
						                                                                         min(len(
							                                                                         material_values),
							                                                                         random.randint(1,
							                                                                                        3)))))

					# Create variants if we have attributes
					if variant_attributes:
						# Build all combinations of variant attributes
						def create_variants(product, current_combo=None, attribute_index=0):
							if current_combo is None:
								current_combo = {}

							if attribute_index >= len(variant_attributes):
								# Create a variant with this combination
								attr_name_list = []
								for attr_key, attr_value in current_combo.items():
									attr_name_list.append(f"{attr_value.value}")

								variant_name = " / ".join(attr_name_list)
								variant_sku = f"{product.sku}-{'-'.join([v.value.replace(' ', '') for v in current_combo.values()])}"

								# Adjust price based on attributes
								price_adjustment = decimal.Decimal('0.00')
								for attr_key, attr_value in current_combo.items():
									if attr_key == 'storage' and 'GB' in attr_value.value:
										# Higher storage costs more
										gb = int(attr_value.value.replace('GB', '').replace('TB', '000'))
										price_adjustment += decimal.Decimal(str(gb * 0.1))
									elif attr_key == 'ram' and 'GB' in attr_value.value:
										# Higher RAM costs more
										gb = int(attr_value.value.replace('GB', ''))
										price_adjustment += decimal.Decimal(str(gb * 0.2))

								# Create the variant
								variant = ProductVariant.objects.create(
									product=product,
									name=variant_name,
									sku=variant_sku,
									price_adjustment=price_adjustment,
									stock_quantity=random.randint(0, 50),
									is_active=True,
								)

								# Add attributes to the variant
								for attr_key, attr_value in current_combo.items():
									ProductVariantAttribute.objects.create(
										variant=variant,
										attribute_value=attr_value,
									)

								return

							attr_type, attr, values = variant_attributes[attribute_index]
							for value in values:
								new_combo = current_combo.copy()
								new_combo[attr_type] = value
								create_variants(product, new_combo, attribute_index + 1)

						create_variants(product)

			except Exception as e:
				self.stdout.write(self.style.WARNING(f'Error creating product: {e}'))

	def create_discounts(self):
		"""Create discount codes"""
		self.stdout.write('Creating discounts...')

		discount_types = [
			{
				'code': 'WELCOME10',
				'name': 'Welcome Discount',
				'description': '10% off your first purchase',
				'discount_type': 'percentage',
				'value': decimal.Decimal('10.00'),
				'is_active': True,
				'valid_from': timezone.now() - datetime.timedelta(days=30),
				'valid_to': timezone.now() + datetime.timedelta(days=60),
				'minimum_order_amount': decimal.Decimal('50.00'),
				'maximum_discount_amount': decimal.Decimal('100.00'),
				'usage_limit': 1000,
				'usage_count': random.randint(10, 200),
				'is_one_time_use_per_customer': True,
			},
			{
				'code': 'SUMMER25',
				'name': 'Summer Sale',
				'description': '25% off summer collection',
				'discount_type': 'percentage',
				'value': decimal.Decimal('25.00'),
				'is_active': True,
				'valid_from': timezone.now() - datetime.timedelta(days=15),
				'valid_to': timezone.now() + datetime.timedelta(days=45),
				'minimum_order_amount': None,
				'maximum_discount_amount': decimal.Decimal('200.00'),
				'usage_limit': None,
				'usage_count': random.randint(50, 500),
				'is_one_time_use_per_customer': False,
			}]
