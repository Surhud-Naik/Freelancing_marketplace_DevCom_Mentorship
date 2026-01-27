from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import ServiceSerializer, ReviewSerializer, NotificationSerializer
from django.shortcuts import get_object_or_404, redirect
from django.core.exceptions import PermissionDenied
from .models import Service, Review, Notification
class ServiceCreateAPIView(APIView):
    def post(self, request):
        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ReviewCreateAPIView(APIView):
    def post(self, request):
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class NotificationListView(APIView):
    def get(self, request):
        return Response([{"msg": n.message} for n in Notification.objects.filter(recipient=request.user)])
@api_view(['POST'])    
def submit_review(request,service_id):
    service=get_object_or_404(Service, id=service_id)
    if request.user.id not in list(service.Buyer_ID):
        raise PermissionDenied("You are not authorized to review this service.")
    if request.method == 'POST':
        Review.objects.create(
            serviceID=service,
            BuyerID=request.user,
            review=request.POST.get('review')
        )
        return redirect('success_url')
@api_view(['POST'])    
def buy_service(request, service_id):
    service = get_object_or_404(Service, id=service_id)
    if service.sellerID == request.user.id:
        raise PermissionDenied("You cannot buy your own service.")
    if not service.Sell_state:
        service.Sell_state = True
    service.No_Of_Buyers += 1
    service.Buyer_ID.append(request.user.id)
    service.save()
    Notification.objects.create(
        recipient=service.sellerID,
        message=f"Your service '{service.Name}' has been purchased by {request.user.username}.")
    return redirect('success_url')
