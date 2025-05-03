from rest_framework import serializers

from ecommerce.models import (
	Category, Brand
)


class BrandSerializer(serializers.ModelSerializer):
	class Meta:
		model = Brand
		fields = ['id', 'name']


class RecursiveCategorySerializer(serializers.Serializer):
	"""Used for recursively nesting child categories"""

	def to_representation(self, value):
		serializer = self.parent.parent.__class__(value, context=self.context)
		return serializer.data


class CategorySerializer(serializers.ModelSerializer):
	children = RecursiveCategorySerializer(many=True, read_only=True)

	class Meta:
		model = Category
		fields = ['id', 'name', 'slug', 'description', 'image', 'is_active', 'children']


class CategoryOnlySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ['id', 'name', 'slug', 'description', 'image', 'is_active']
