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


# @api_view(['GET'])
# def list_post(request):
#     qs = Post.objects.all()
#     serializer = PostListSerializer(qs, many=True)
#     return Response(serializer.data, status=200)

# def create_post_pure_django(request, slug=None):
#     if request.user.is_authenticated and request.method == 'POST':
#         form = PostForm(request.POST or None)

#         if form.is_valid():
#             post = form.save(commit=False)
#             post.author = request.user
#             post.save()
#             form = PostForm()
#             return redirect('/')
#         # if form has error
#         else:
#             form = PostForm(request.POST)

#     # un-authenticated or invalid request type
#     else:
#         form = PostForm()
    
#     return render(request, 'posts/create_form.html', {"form": form})


# @api_view(['GET', 'POST'])
# def post_detail(request, slug=None):
#     qs = Post.objects.filter(slug=slug)
#     if not qs.exists():
#         return Response({}, status=404)

#     post = qs.first()
#     post_serializer = PostDetailSerializer(post)

#     return Response(post_serializer.data, status=200)

# @api_view(['DELETE'])
# def post_delete(request, slug=None):
#     instance = get_object_or_404(Post, slug=slug)
#     if instance and instance.author == request.user:
#         instance.delete()
#         return HttpResponse("Post deleted!")
#     return HttpResponse("Error")


# def list_post_pure_django(request, slug=None):
#     qs = Post.objects.all()
#     data = {
#         "response": []
#     }
#     for post in qs:
#         p = {
#             "slug": post.slug,
#             "title": post.title,
#             "description": post.description,
#             "body": post.body,
#             "author": post.author.username,
#             "created_at": post.created_at,
#             "updated_at": post.updated_at,
#             "comments": post.comments.count()
#         }
#         data["response"].append(p)
#     return JsonResponse(data=data, status=200)


# # def list_post_pure_django(request, slug=None):
# #     posts = Post.objects.all()
# #     return render(request, 'posts/list_post.html', {"posts": posts})

# def post_detail_pure_django(request, slug=None):
#     post = get_object_or_404(Post, slug=slug)
#     comments = Comment.objects.filter(parent=post)
#     form = CommentForm()
#     return render(request, "posts/post_detail.html", {"post": post, "comments": post.comments, "comment_form": form})

# def post_update(request, slug=None):
#     instance = get_object_or_404(Post, slug=slug)
#     if request.method == 'POST':
#         form = PostForm(request.POST or None, instance=instance)
        
#         if form.is_valid():
#             instance = form.save(commit=False)
#             instance.save()
#             return redirect('post_detail', slug=slug)
#         else:
#             return HttpResponse(form.errors)
#             print(form.errors)
#     else:
#         form = PostForm(instance=instance)
#     return render(request, 'posts/create_form.html', {"form": form})
        

# def post_delete(request, slug=None):
#     instance = get_object_or_404(Post, slug=slug)
#     if instance and instance.author == request.user:
#         instance.delete()
#         return HttpResponse("Post deleted!")
#     return HttpResponse("Error")


# def create_comment(request, slug=None):
#     if request.user.is_authenticated:
#         if request.method == 'POST':
#             form = CommentForm(request.POST or None)

#             if form.is_valid():
#                 instance = form.save(commit=False)
#                 instance.parent = get_object_or_404(Post, slug=slug)
#                 instance.author = request.user
#                 instance.save()
#                 return redirect('post_detail', slug=slug)
#             else:
#                 print(form.errors)
#     else:
#         return HttpResponse('You need to be logged in to create comment')


# def list_comment(request, slug=None):
#     post = get_object_or_404(Post, slug=slug)
#     comments = Comment.objects.filter(parent=post)
#     form = CommentForm()
#     return render(request, 'posts/list_comment', {"form": form, "comments": comments})

# def update_comment(request, id, slug=None):
#     post = get_object_or_404(Post, slug=slug)
#     comment = get_object_or_404(Comment, id=id)
#     if request.method == 'POST':
#         form = CommentForm(request.POST or None, instance=comment)
        
#         if form.is_valid():
#             comment = form.save(commit=False)
#             comment.save()
#             return redirect('post_detail', slug=slug)
#         else:
#             print(form.errors)
#     else:
#         form = CommentForm(instance=comment)
#     return render(request, 'posts/create_form.html', {"form": form})


# def delete_comment(request, id, slug=None):
#     post = get_object_or_404(Post, slug=slug)
#     comment = get_object_or_404(Comment, id=id)
#     if comment.author == request.user or post.author == request.author:
#         comment.delete()
#         return redirect('post_detail', slug=slug)
#     else:
#         return HttpResponse('You don\'t have permisson to delete this comment')