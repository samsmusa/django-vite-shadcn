from django.contrib import admin
from account import models
# Register your models here.

admin.site.register(models.User)
admin.site.register(models.Vendor)
admin.site.register(models.StoreManager)
admin.site.register(models.CustomerProfile)
