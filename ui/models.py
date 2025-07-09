from django.db import models

# Create your models here.
class UI(models.Model):
    name = models.CharField(max_length=100)
    page = models.CharField(max_length=100)
    row = models.IntegerField()
    column = models.IntegerField()
    component_name = models.CharField(max_length=100)
    config = models.JSONField()

