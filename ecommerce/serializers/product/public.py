from rest_framework import serializers

from ecommerce.models import (
	Product, ProductVariant, ProductImage,
	ProductReview
)
from ecommerce.serializers.base.public import BrandSerializer, CategorySerializer


class ProductImageSerializer(serializers.ModelSerializer):
	class Meta:
		model = ProductImage
		fields = ['id', 'image', 'alt_text', 'is_primary', 'sort_order']


class ProductVariantSerializer(serializers.ModelSerializer):
	attribute_values = serializers.SerializerMethodField()

	class Meta:
		model = ProductVariant
		fields = ['id', 'name', 'sku', 'price', 'stock_quantity', 'is_active', 'image', 'attribute_values']

	def get_attribute_values(self, obj):
		return [str(attr) for attr in obj.attributes.all()]


class ProductSerializer(serializers.ModelSerializer):
	brand = BrandSerializer(read_only=True)
	category = CategorySerializer(read_only=True)
	images = ProductImageSerializer(many=True, read_only=True)
	price = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
	discount_percentage = serializers.IntegerField(read_only=True)
	is_on_sale = serializers.BooleanField(read_only=True)

	class Meta:
		model = Product
		fields = [
			'id', 'name', 'slug', 'sku', 'brand', 'category',
			'short_description', 'price', 'compare_price', 'is_on_sale',
			'discount_percentage', 'images'
		]


class ProductDetailSerializer(serializers.ModelSerializer):
	brand = BrandSerializer(read_only=True)
	category = CategorySerializer(read_only=True)
	images = ProductImageSerializer(many=True, read_only=True)
	variants = ProductVariantSerializer(many=True, read_only=True)
	is_on_sale = serializers.BooleanField(read_only=True)
	discount_percentage = serializers.IntegerField(read_only=True)
	profit_margin = serializers.SerializerMethodField()

	class Meta:
		model = Product
		fields = [
			'id', 'name', 'slug', 'sku', 'brand', 'category', 'description',
			'short_description', 'price', 'compare_price', 'is_on_sale',
			'discount_percentage', 'profit_margin', 'stock_quantity', 'images', 'variants'
		]

	def get_profit_margin(self, obj):
		return round(obj.profit_margin, 2) if obj.profit_margin else None


class ProductReviewSerializer(serializers.ModelSerializer):
	user = serializers.StringRelatedField(read_only=True)

	class Meta:
		model = ProductReview
		fields = [
			'id', 'product', 'user', 'rating', 'title', 'comment',
			'is_verified_purchase', 'is_approved', 'created_at'
		]
		read_only_fields = ['product', 'user', 'is_approved', 'created_at']
