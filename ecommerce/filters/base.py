import django_filters
from ecommerce.models import Category


class CategoryFilter(django_filters.FilterSet):
    parent = django_filters.BooleanFilter(method='filter_by_parent')
    is_active = django_filters.BooleanFilter()

    class Meta:
        model = Category
        fields = ['parent', 'is_active']

    def filter_by_parent(self, queryset, name, value):
        if value:
            return queryset.exclude(parent=None)
        return queryset.filter(parent=None)