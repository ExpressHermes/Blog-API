from django.urls import path
from .views import UserCreateAPIView, UserListAPIView, UserLoginAPIView

app_name = "accounts"

urlpatterns = [
    path("", UserListAPIView.as_view(), name="user_list"),
    path("register/", UserCreateAPIView.as_view(), name="user_create"),
    path("login/", UserLoginAPIView.as_view(), name="user_login"),
]