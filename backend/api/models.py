from django.db import models
class transaction(models.Model):
    transactionID=models.IntegerField(max_length=100)
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
    userID=models.CharField(max_length=100)
    Name=models.CharField(max_length=100)
    Phone_number=models.IntegerField()
    Qualification=models.CharField(max_length=100)
    Description=models.CharField(max_length=500)
    Youtube_link=models.CharField(max_length=200)
    Price=models.IntegerField()
    Sell_state=models.BooleanField(default=False)
    No_Of_Buyers=models.CharField(max_length=100, default="",blank=True)   

    def __str__(self):
        return self.Name