from rest_framework import serializers
from .models import Post, Comment


class PostCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
                    'author',
                    'title', 
                    'description', 
                    'body', 
                ]

    def validate_title(self, value):
        if len(value) > 100:
            return serializers.ValidationError('Max title length is 100 characters')
        return value
    
    def validate_description(self, value):
        if len(value) > 200:
            return serializers.ValidationError('Max description length is 200 characters')
        return value

class PostListSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = [
                    'id', 
                    'url',
                    'title', 
                    'author',
                    'description',
                    'comments',
                ]

    def get_comments(self, obj):
        qs = Comment.objects.filter(parent=obj).count()
        return qs
    
    def get_url(self, obj):
        return obj.get_api_url()


class PostDetailSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = [
                    'id', 
                    'slug', 
                    'title', 
                    'description', 
                    'body', 
                    'author',
                    'created_at', 
                    'updated_at',
                    'comments',
                ]

    def get_comments(self, obj):
        qs = Comment.objects.filter(parent=obj)
        try:
            serializer = CommentSerializer(qs, many=True)
        except Exception as e:
            print(e)
        return serializer.data


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
                    'id', 
                    'parent',
                    'author',
                    'body', 
                    'created_at', 
                    'updated_at',
                ]

class CommentCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [ 
                    'parent',
                    'author',
                    'body', 
                ]
        
