import django_filters

from ecommerce.models import Category, Address


class AddressFilter(django_filters.FilterSet):
	address_type = django_filters.ChoiceFilter(choices=Address.ADDRESS_TYPE_CHOICES)
	city = django_filters.CharFilter(lookup_expr='icontains')
	state = django_filters.CharFilter(lookup_expr='icontains')

	class Meta:
		model = Address
		fields = ['address_type', 'city', 'state']


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
