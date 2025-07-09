from django.contrib import admin

from ui.models import UI

for model in [UI]:
	admin.site.register(model)