import random

from django.core.management.base import BaseCommand
from django.utils.text import slugify
from faker import Faker

from account.models import User, Vendor, StoreManager
from ecommerce.models import Address

fake = Faker()


class Command(BaseCommand):
	help = 'Seeds the database with sample users, vendors, and store managers'

	def add_arguments(self, parser):
		parser.add_argument('--users', type=int, default=50)
		parser.add_argument('--vendors', type=int, default=10)
		parser.add_argument('--managers', type=int, default=20)
		parser.add_argument('--clear', action='store_true')

	def handle(self, *args, **options):
		if options['clear']:
			self.clear_data()

		self.create_users(options['users'])
		self.create_vendors(options['vendors'])
		self.create_store_managers(options['managers'])

		self.stdout.write(self.style.SUCCESS('✔ Database seeded successfully!'))

	def clear_data(self):
		self.stdout.write('🧹 Clearing data...')
		StoreManager.objects.all().delete()
		Vendor.objects.all().delete()
		Address.objects.all().delete()
		User.objects.exclude(is_superuser=True).delete()
		self.stdout.write(self.style.SUCCESS('✔ Data cleared'))

	def create_users(self, count):
		self.stdout.write(f'👥 Creating {count} users...')
		for _ in range(count):
			first = fake.first_name()
			last = fake.last_name()
			username = f"{first.lower()}.{last.lower()}{random.randint(1, 999)}"
			user = User.objects.create_user(
				username=username,
				email=f"{username}@example.com",
				password='password123',
				first_name=first,
				last_name=last,
				is_marketing_subscribed=random.choice([True, False]),
				date_of_birth=fake.date_of_birth(minimum_age=18, maximum_age=70),
				role=User.Role.CUSTOMER,
			)

			for atype in ['billing', 'shipping']:
				Address.objects.create(
					user=user,
					address_type=atype,
					is_default=True,
					full_name=f"{first} {last}",
					address_line1=fake.street_address(),
					city=fake.city(),
					state=fake.state(),
					country=fake.country_code(),
					postal_code=fake.postcode(),
					phone_number=fake.phone_number()
				)

	def create_vendors(self, count):
		self.stdout.write(f'🏪 Creating {count} vendors...')
		customers = User.objects.filter(role=User.Role.CUSTOMER)
		used_ids = set()

		for _ in range(count):
			user = random.choice(customers.exclude(id__in=used_ids))
			used_ids.add(user.id)
			user.role = User.Role.VENDOR
			user.save()

			store_name = f"{fake.company()} Store"
			Vendor.objects.create(
				user=user,
				store_name=store_name,
				store_slug=slugify(store_name),
				description=fake.text(max_nb_chars=200),
				is_active=True
			)

	def create_store_managers(self, count):
		self.stdout.write(f'👨‍💼 Assigning {count} store managers...')
		customers = User.objects.filter(role=User.Role.CUSTOMER)
		vendors = Vendor.objects.all()
		used_ids = set()

		for _ in range(count):
			user = random.choice(customers.exclude(id__in=used_ids))
			used_ids.add(user.id)
			vendor = random.choice(vendors)

			user.role = User.Role.MANAGER
			user.save()

			StoreManager.objects.create(
				user=user,
				vendor=vendor,
				can_manage_products=random.choice([True, False]),
				can_manage_orders=random.choice([True, False])
			)
