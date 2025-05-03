from rest_framework import serializers
from ecommerce.models import Product

class ProductPrivateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        extra_kwargs = {
            'cost_price': {'write_only': True},
            'supplier_details': {'write_only': True},
        }