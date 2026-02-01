from django.contrib import admin
from .models import Review, Service, Notification, transaction

class TransactionAdmin(admin.ModelAdmin):
    list_display = ('transactionID', 'buyer', 'seller', 'service', 'price', 'status', 'time', 'deliverables')

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('serviceID','Service_Name','Name', 'sellerID','email', 'Description', 'Youtube_link','Price','Buyer_ID', 'No_Of_Buyers', 'Phone_number', 'Qualification')

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('serviceID', 'BuyerID', 'review')

class NotificationAdmin(admin.ModelAdmin):
    list_display = ('recipient', 'message')

# Register your models here.
admin.site.register(Service, ServiceAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Notification, NotificationAdmin)
admin.site.register(transaction, TransactionAdmin)