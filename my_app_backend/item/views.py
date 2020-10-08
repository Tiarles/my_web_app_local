from django.shortcuts import render
from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer


def home_view(request):
    return render(request, 'my-app-frontend/index.html', {})


class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
