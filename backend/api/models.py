from django.db import models

class Service(models.Model):
    userID=models.CharField(max_length=100)
    Name=models.CharField(max_length=100)
    Phone_number=models.IntegerField()
    Qualification=models.CharField(max_length=100)
    Description=models.CharField(max_length=500)
    Youtube_link=models.CharField(max_length=200)
    Price=models.IntegerField()
    Sell_state=models.BooleanField(default=False)
    Buyer_ID=models.CharField(max_length=100, default="",blank=True)   

    def __str__(self):
        return self.Name