from django.contrib import admin
from .models import Review, Service, Notification, transaction

class TransactionAdmin(admin.ModelAdmin):
    list_display = ('transactionID', 'buyer', 'seller', 'service', 'price', 'status', 'time', 'deliverables')

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('Name', 'sellerID', 'Phone_number', 'Qualification', 'Price', 'Sell_state', 'No_Of_Buyers')

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('serviceID', 'BuyerID', 'review')

class NotificationAdmin(admin.ModelAdmin):
    list_display = ('recipient', 'message')

# Register your models here.
admin.site.register(Service, ServiceAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Notification, NotificationAdmin)
admin.site.register(transaction, TransactionAdmin)