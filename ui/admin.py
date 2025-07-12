from django.contrib import admin

from ui.models import UI

@admin.register(UI)
class UIAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'component', 'dest_url', 'page', 'row', 'column', 'precedence')
    list_filter = ('page', 'component')
    search_fields = ('name', 'component', 'dest_url', 'calling_component')