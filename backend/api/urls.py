from django.urls import path
from .views import ServiceCreateAPIView
from django.http import HttpResponse
urlpatterns = [
    path('services/', ServiceCreateAPIView.as_view(), name='services-create'),
]