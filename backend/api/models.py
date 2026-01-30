from django.db import models
from django.conf import settings


class transaction(models.Model):

    STATUS_CHOICES = [
        ('approved', 'Approved'),
        ('Sent', 'Sent'),
        ('uploaded', 'Uploaded'),
        ('rejected', 'Rejected'),
        ('completed', 'Completed'),
    ]

    transactionID = models.IntegerField()

    ServiceID = models.ForeignKey(
        'Service',
        on_delete=models.CASCADE
    )

    from django.conf import settings

    buyer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='transactions_bought'
    )

    seller = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='transactions_sold'
    )
    price = models.IntegerField()

    status = models.CharField(
        max_length=20,
        default="Sent",
        choices=STATUS_CHOICES
    )

    deliverables = models.CharField(max_length=50, default="null")

    def __str__(self):
        return str(self.transactionID)


class Service(models.Model):

    sellerID = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        default=""
    )

    Name = models.CharField(max_length=100)
    Phone_number = models.IntegerField()
    Qualification = models.CharField(max_length=100)
    Description = models.CharField(max_length=500)
    Youtube_link = models.CharField(max_length=200)
    Price = models.IntegerField()

    Sell_state = models.BooleanField(default=False)

    Buyer_ID = models.JSONField(null=True, blank=True)
    No_Of_Buyers = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return self.Name


class Review(models.Model):

    serviceID = models.ForeignKey(Service, on_delete=models.CASCADE)
    BuyerID = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    review = models.CharField(max_length=500)

    def __str__(self):
        return self.review


class Notification(models.Model):

    recipient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    message = models.CharField(max_length=500)

    def __str__(self):
        return f"To {self.recipient.username}: {self.message}"
    def __str__(self):
        return f"To {self.recipient.username}: {self.message}"