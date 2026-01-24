# api/serializers.py
from rest_framework import serializers
from .models import Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
from .models import transaction
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = transaction
        fields = '__all__'