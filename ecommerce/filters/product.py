import django_filters
from ecommerce.models import Product

class ProductFilter(django_filters.FilterSet):
    min_price = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    max_price = django_filters.NumberFilter(field_name="price", lookup_expr="lte")
    category = django_filters.BaseInFilter(field_name="category__id", lookup_expr="in")
    brand = django_filters.BaseInFilter(field_name="brand__id", lookup_expr="in")
    is_featured = django_filters.BooleanFilter()

    class Meta:
        model = Product
        fields = ['min_price', 'max_price', 'category', 'brand', 'is_featured']
