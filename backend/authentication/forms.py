from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from .models import CustomUser
class CreateCustomUserForm():
    class Meta(UserCreationForm.Meta):
        model=CustomUser
        fields=("email",)
class CustomUserChangeForm():
    class Meta:
        model=CustomUser
        fields=("email",)