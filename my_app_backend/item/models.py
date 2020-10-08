from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=50)
    amount = models.PositiveBigIntegerField(default=0)
