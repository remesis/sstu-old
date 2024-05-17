from django.urls import path, include
from .views import *

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('teachers/<int:pk>/', TeacherViewSet.as_view({'get': 'list'})),
    path('research/', ResearchViewSet.as_view({'get': 'list'})),
    path('notice/', NoticeViewSet.as_view({'get': 'list'})),
    path('notice/<int:pk>/', NoticeByID.as_view({'get': 'list'})),
]
