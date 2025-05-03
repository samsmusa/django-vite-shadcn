from rest_framework import serializers

from ecommerce.models import (
	Category, Brand
)


class BrandSerializer(serializers.ModelSerializer):
	class Meta:
		model = Brand
		fields = ['id', 'name']


class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ['id', 'name', 'slug']
