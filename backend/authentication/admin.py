from django.contrib import admin
from .models import CustomUser
from .forms import CreateCustomUserForm, CustomUserChangeForm
from django.contrib.auth.admin import UserAdmin

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'username', 'first_name', 'last_name', 'is_staff', 'is_active', 'date_joined')
    fieldsets = UserAdmin.fieldsets