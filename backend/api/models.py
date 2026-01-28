from django.db import models
from django.conf import settings
class transaction(models.Model):
    transactionID=models.IntegerField()
    buyer=models.CharField(max_length=50)
    seller=models.CharField(max_length=50)
    service=models.CharField(max_length=100)
    price=models.IntegerField()
    status=models.CharField(max_length=20, default="in progress")
    time=models.CharField(max_length=50)
    deliverables=models.CharField(max_length=50, default="null")
    def __str__(self):
        return self.transactionID
    
class Service(models.Model):
    serviceID=models.AutoField(primary_key=True)
    Profile_image=models.ImageField(upload_to='services_profiles/', null=True, blank=True)
    sellerID=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,default="")
    Name=models.CharField(max_length=100)
    Service_Name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    Phone_number=models.IntegerField()
    Qualification=models.CharField(max_length=100)
    Description=models.CharField(max_length=500)
    Youtube_link=models.CharField(max_length=200)
    Buyer_ID=models.JSONField(null=True, blank=True)
    No_Of_Buyers=models.IntegerField(default=0,blank=True)
    def __str__(self):
        return self.Service_Name
class Review(models.Model):
    serviceID=models.ForeignKey(Service, on_delete=models.CASCADE)
    BuyerID=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    review=models.CharField(max_length=500)
    def __str__(self):
        return self.review
class Notification(models.Model):
    recipient=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    message=models.CharField(max_length=500)
    def __str__(self):
        return f"To {self.recipient.username}: {self.message}"