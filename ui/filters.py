import django_filters
from ui.models import UI

class UIFilter(django_filters.FilterSet):
    page = django_filters.CharFilter(field_name="page", lookup_expr="iexact")
    component = django_filters.CharFilter(field_name="component", lookup_expr="iexact")
    tag = django_filters.CharFilter(field_name="calling_component", lookup_expr="iexact")

    class Meta:
        model = UI
        fields = ['page', "component", "tag"]
