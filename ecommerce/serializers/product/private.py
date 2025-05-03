from rest_framework import serializers

from ecommerce.models import Cart, WishlistItem, Wishlist, CartItem


class CartSerializer(serializers.ModelSerializer):
	class Meta:
		model = Cart
		fields = [
			'id', 'user', 'session_id', "updated_at", "discount", 'created_at'
		]
		read_only_fields = ['user', 'updated_at', 'created_at']


class CartItemSerializer(serializers.ModelSerializer):
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
