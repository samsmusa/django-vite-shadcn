from rest_framework import serializers

from ecommerce.models import Cart, WishlistItem, Wishlist, CartItem, ProductReview, Product, ProductImage, \
	ProductVariant


class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = [
			'id', 'name', 'slug', 'sku', 'brand', 'category',
			'short_description', 'price', 'compare_price', 'is_on_sale',
			'discount_percentage', 'images'
		]


class ProductDetailSerializer(serializers.ModelSerializer):
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


class CartSerializer(serializers.ModelSerializer):
	class Meta:
		model = Cart
		fields = [
			'id', 'user', "is_active", 'session_id', "updated_at", "discount", 'created_at'
		]
		read_only_fields = ['user', "session_id", 'updated_at', 'created_at']


class CartItemSerializer(serializers.ModelSerializer):
	product = ProductSerializer(read_only=True)
	variant = ProductVariantSerializer(read_only=True)

	class Meta:
		model = CartItem
		fields = [
			'id', 'cart', 'product', 'variant', 'quantity', 'created_at'
		]
		read_only_fields = ['updated_at', 'created_at']


class CartItemSerializerCreate(serializers.ModelSerializer):
	class Meta:
		model = CartItem
		fields = [
			'id', 'cart', 'product', 'variant', 'quantity', 'created_at'
		]
		read_only_fields = ['updated_at', 'created_at']


class WishSerializer(serializers.ModelSerializer):
	class Meta:
		model = Wishlist
		fields = [
			'id', 'user', 'name', "updated_at", "is_public", 'created_at'
		]
		read_only_fields = ['user', 'updated_at', 'created_at']


class WishItemSerializer(serializers.ModelSerializer):
	class Meta:
		model = WishlistItem
		fields = [
			'id', 'product', 'variant', 'created_at'
		]
		read_only_fields = ['updated_at', 'created_at']
