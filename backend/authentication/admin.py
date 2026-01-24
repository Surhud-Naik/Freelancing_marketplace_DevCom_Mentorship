from django.contrib import admin
# Register your models here.
from .models import CustomUser
from .forms import CreateCustomUserForm,CustomUserChangeForm
from django.contrib.auth.admin import UserAdmin
@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    pass