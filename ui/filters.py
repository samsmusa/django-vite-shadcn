import django_filters
from ui.models import UI

class UIFilter(django_filters.FilterSet):
    page = django_filters.CharFilter(field_name="page", lookup_expr="iexact")
    component = django_filters.CharFilter(field_name="component_name", lookup_expr="iexact")

    class Meta:
        model = UI
        fields = ['page', "component_name"]
