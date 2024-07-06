from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import PostSerializer
from .models import Post
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
class PostModelViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = "slug"

    @action(detail=False, methods=['GET'])
    def recent(self, request):
        posts = Post.objects.all()[:6]
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

@csrf_exempt
def create_blog(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        # return JsonResponse({'message': 'Blog added successfully'}, status=200)
    return JsonResponse({'error': 'Method not allowed'}, status=405)
