from django.urls import path
from .views import ServiceCreateAPIView, TransactionCreateAPIView
from django.http import HttpResponse
urlpatterns = [
    path('services/', ServiceCreateAPIView.as_view(), name='services-create'),
    path('transactions/', TransactionCreateAPIView.as_view(), name='transactions-create'),
]