from django.urls import path
from .views import hello
from .views import BookCreateAPIView

urlpatterns = [
    path('books/', BookCreateAPIView.as_view(), name='book-create'),
]

urlpatterns = [
    path('hello/', hello),
]