from django.contrib import admin

from fileserver.models import FileUpload, ImageVariant

for model in [FileUpload, ImageVariant]:
	admin.site.register(model)