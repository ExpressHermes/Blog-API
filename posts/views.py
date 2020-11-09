from django.shortcuts import render, redirect, get_object_or_404, HttpResponse
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,  
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
    RetrieveUpdateDestroyAPIView
    )

from .models import Post, Comment
from .forms import PostForm, CommentForm

from .mixins import MultipleFieldLookupMixin
from .serializers import (
    PostCreateUpdateSerializer, 
    PostListSerializer, 
    PostDetailSerializer, 
    CommentSerializer,
    CommentCreateUpdateSerializer
    )


# Create your views here.
class CreatePostAPIView(APIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateUpdateSerializer
    permission_classes = [IsAuthenticated, ]

    def post(self, request, *args, **kwargs):
        serializer = PostCreateUpdateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response({"errors": serializer.errors}, status=400)


class ListPostAPIView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class DetailPostAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    lookup_field = 'slug'
    serializer_class = PostDetailSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class CreateCommentAPIView(APIView):
    serializer_class = CommentCreateUpdateSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = CommentCreateUpdateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response({"errors": serializer.errors}, status=400)


class ListCommentAPIView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, slug):
        post = Post.objects.get(slug=slug)
        comments = Comment.objects.filter(parent=post)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=200)


class DetailCommentAPIView(MultipleFieldLookupMixin, RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]

    queryset = Comment.objects.all()
    lookup_fields = ['parent', 'id']
    serializer_class = CommentSerializer