from django.contrib import admin
from .models import Review, Service, Notification, transaction
# Register your models here.
admin.site.register(Service)
admin.site.register(Review)
admin.site.register(Notification)
admin.site.register(transaction)