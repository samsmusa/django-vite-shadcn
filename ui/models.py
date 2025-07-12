from django.db import models

from ecommerce.models import PromotedProduct


# Create your models here.
class UI(models.Model):
    name = models.CharField(max_length=500)
    page = models.CharField(max_length=50)
    dest_url = models.CharField(max_length=50)
    row = models.IntegerField()
    column = models.IntegerField()
    component = models.CharField(max_length=100)
    calling_component = models.CharField(max_length=100)
    config = models.JSONField()
    featured_product = models.ForeignKey(PromotedProduct, on_delete=models.SET_NULL, null=True, blank=True)
    precedence = models.IntegerField()
    classes = models.CharField(max_length=255, null=True, blank=True)
    class Meta:
        unique_together = ("name", "page", "precedence")

    def __str__(self):
        return self.name

