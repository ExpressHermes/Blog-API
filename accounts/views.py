from django.contrib.auth import get_user_model
from django.shortcuts import render

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
)

from .serializers import UserSerializer, UserCreateSerializer, UserLoginSerializer

# Create your views here.

User = get_user_model()


class UserListAPIView(ListAPIView):
    """
    get:
    Returns a list of all existing users

    post:
    Not Allowed
    """

    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserCreateAPIView(CreateAPIView):
    """
    get:
    Not Allowed

    post:
    Create new user instance. Returns username, email and token for the created user.

    parameters:
        username:
            type: string,
            required: True
        email:
            type: email,
            required: True
        password:
            type: string,
            required: True
    """

    permission_classes = [AllowAny]
    serializer_class = UserCreateSerializer


class UserLoginAPIView(APIView):
    """
    get:
    Not Allowed

    post:
    Used to login on the browsable api

    parameters:
        username:
            type: string,
            required: True
        password:
            type: string,
            required: True
    """

    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
