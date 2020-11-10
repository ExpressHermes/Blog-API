from django.shortcuts import render, redirect, get_object_or_404, HttpResponse
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.permissions import (
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
    AllowAny,
)
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from .models import Post, Comment
from .permissions import IsOwnerOrReadOnly
from .mixins import MultipleFieldLookupMixin
from .serializers import (
    PostCreateUpdateSerializer,
    PostListSerializer,
    PostDetailSerializer,
    CommentSerializer,
    CommentCreateUpdateSerializer,
)

# Create your views here.
class CreatePostAPIView(APIView):
    """
    get:
    Not Allowed

    post:
    Creates a new post instance. Returns created post data

    parameters:
        author:
            type: integer(id of current user),
            required=True
        title:
            type: string,
            required: True
        body:
            type: string,
            required: True
        description:
            type: string,
            required: True
    """

    queryset = Post.objects.all()
    serializer_class = PostCreateUpdateSerializer
    permission_classes = [
        IsAuthenticated,
    ]

    def post(self, request, *args, **kwargs):
        serializer = PostCreateUpdateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response({"errors": serializer.errors}, status=400)


class ListPostAPIView(ListAPIView):
    """
    get:
    Returns a list of all existing posts

    post:
    Not Allowed
    """

    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class DetailPostAPIView(RetrieveUpdateDestroyAPIView):
    """
    get:
    Returns the details of a post instance. Searches post using slug field.

    put:
    Updates an existing post. Returns updated post data

        parameters:
            author:
                type: integer(id of current user),
                required=True
            title:
                type: string,
                required: True
            body:
                type: string,
                required: True
            description:
                type: string,
                required: True

    delete:
    Delete an existing post
    """

    queryset = Post.objects.all()
    lookup_field = "slug"
    serializer_class = PostDetailSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class CreateCommentAPIView(APIView):
    """
    get:
    Not Allowed

    post:
    Create a comment instnace. Returns created comment data

    parameters:
        author:
            type: integer(id of current user),
            required=True
        parent:
            type: id(post id),
            required: True
        body:
            type: string,
            required: True
    """
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
    """
    get:
    Returns the list of comments on a particular post

    post:
    Not Allowed
    """

    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, slug):
        post = Post.objects.get(slug=slug)
        comments = Comment.objects.filter(parent=post)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=200)


class DetailCommentAPIView(MultipleFieldLookupMixin, RetrieveUpdateDestroyAPIView):
    """
    get:
    Returns the details of a comment instance. Searches comment using comment id and post slug in the url.

    put:
    Updates an existing comment. Returns updated comment data

        parameters:
            parent:
                type: integer(post id),
                required=True
            author:
                type: integer(current user id),
                required: True
            body:
                type: string,
                required: True

    delete:
    Delete an existing comment 
    """

    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    queryset = Comment.objects.all()
    lookup_fields = ["parent", "id"]
    serializer_class = CommentSerializer