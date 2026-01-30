from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import ServiceSerializer, ReviewSerializer, NotificationSerializer, TransactionSerializer
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
def submit_review(request, service_id):
    service = get_object_or_404(Service, id=service_id)

    buyers = service.Buyer_ID or []

    if request.user.id not in buyers:
        raise PermissionDenied("You are not authorized to review this service.")

    if request.method == 'POST':
        Review.objects.create(
            serviceID=service,
            BuyerID=request.user,
            review=request.data.get('review')
        )
        return redirect('success_url')


@api_view(['POST'])    
def buy_service(request, service_id):
    service = get_object_or_404(Service, id=service_id)

    if service.sellerID == request.user:
        raise PermissionDenied("You cannot buy your own service.")

    if not service.Sell_state:
        service.Sell_state = True

    service.No_Of_Buyers += 1
    if not service.Buyer_ID:
        service.Buyer_ID = []

    service.Buyer_ID.append(request.user.id)

    service.save()

    Notification.objects.create(
        recipient=service.sellerID,
        message=f"{request.user.email} purchased your service '{service.Name}'."
    )

    return redirect('success_url')


class TransactionCreateAPIView(APIView):
    def post(self, request):
        serializer = TransactionSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class TransactionDetailAPIView(APIView):
    def get(self, request, pk):
        txn = get_object_or_404(transaction.objects.select_related("ServiceID__sellerID"), pk=pk)

        if request.user != txn.ServiceID.sellerID and request.user != txn.buyer:
            raise PermissionDenied("You are not allowed to view this transaction.")

        return Response({
            "transactionID": txn.transactionID,
            "status": txn.status,
            "buyer": txn.buyer.email if hasattr(txn.buyer, 'email') else txn.buyer,
            "seller": txn.seller.email if hasattr(txn.seller, 'email') else txn.seller,
            "service": txn.ServiceID.Name,
        })


class TransactionStatusUpdateAPIView(APIView):

    ALLOWED_TRANSITIONS = {
        "Sent": ["uploaded", "rejected"],
        "uploaded": ["approved", "rejected"],
        "approved": ["completed"],
        "rejected": [],
        "completed": [],
    }

    def patch(self, request, pk):
        txn = get_object_or_404(transaction.objects.select_related("ServiceID__sellerID"), pk=pk)

        new_status = request.data.get("status")
        if new_status not in dict(transaction.STATUS_CHOICES):
            return Response({"error": "Invalid status"}, status=status.HTTP_400_BAD_REQUEST)

        user = request.user
        seller = txn.ServiceID.sellerID

        if new_status in ["approved", "rejected"] and user != seller:
            raise PermissionDenied("Only seller can approve or reject.")

        if new_status == "completed" and user != txn.buyer:
            raise PermissionDenied("Only buyer can mark as completed.")

        allowed = self.ALLOWED_TRANSITIONS.get(txn.status, [])
        if new_status not in allowed:
            return Response({"error": f"Cannot move from {txn.status} → {new_status}"},
                            status=status.HTTP_400_BAD_REQUEST)

        txn.status = new_status
        txn.save()

        return Response({"message": "Status updated", "new_status": txn.status})