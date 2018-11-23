from django.urls import path, include,re_path
from .views import course
urlpatterns = [
    path('course/',
         course.CourseView.as_view()),
]