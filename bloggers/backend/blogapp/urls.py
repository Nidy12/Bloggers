from rest_framework.routers import DefaultRouter
from . import views
from django.urls import path, include

router = DefaultRouter()
router.register("blogs", views.PostModelViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('create_blog/', views.create_blog, name='create_blog'),
]
