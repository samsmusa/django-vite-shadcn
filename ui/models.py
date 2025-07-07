from django.db import models

# Create your models here.
class UI(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    row = models.IntegerField()
    column = models.IntegerField()
    component_name = models.CharField(max_length=100)
    categories = models.CharField(max_length=100)


class UIBanner(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    row = models.IntegerField()
    column = models.IntegerField()
    component_name = models.CharField(max_length=100)
    props = models.JSONField()

