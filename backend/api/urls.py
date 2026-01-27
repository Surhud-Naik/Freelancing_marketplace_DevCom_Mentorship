from django.urls import path
from .views import ServiceCreateAPIView, ReviewCreateAPIView, NotificationListView, TransactionCreateAPIView
urlpatterns = [
    path('services/', ServiceCreateAPIView.as_view(), name='services-create'),
    path('notifications/', NotificationListView.as_view(), name='notification-list'),
    path('reviews/', ReviewCreateAPIView.as_view(), name='reviews-create'),
    path('transactions/', TransactionCreateAPIView.as_view(), name='transactions-create'),
]