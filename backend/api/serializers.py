from rest_framework import serializers
from .models import Service, Review, Notification, transaction
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = transaction
        fields = '__all__'
    def validate(self, data):
        request = self.context.get("request")
        service = data.get("ServiceID")
        if request and request.method == "POST" and service:

            seller = service.sellerID
            buyer = request.user
            if buyer == seller:
                raise serializers.ValidationError(
                    "You cannot buy your own service."
                )

        return data