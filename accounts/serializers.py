from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email"]


class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=8, max_length=32, write_only=True)
    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        username = validated_data["username"]
        email = validated_data["email"]
        password = validated_data["password"]
        user_obj = User(username=username, email=email)
        user_obj.set_password(password)
        user_obj.save()
        return user_obj

class UserLoginSerializer(serializers.ModelSerializer):
    token = serializers.CharField(allow_blank=True, read_only=True)
    username = serializers.CharField()
    email = serializers.EmailField(label="Email Address")

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "password",
        ]

    extra_kwargs = {
        "password": {"write_only": True}
        }

    def validate(self, data):

        return data