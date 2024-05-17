from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import *
from .serializers import *

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    lookup_field = 'user__pk' 

    def get_object(self):
        user_id = self.kwargs.get('pk')
        queryset = self.get_queryset().filter(user__pk=user_id).first()
        if queryset is None:
            raise Http404("No Teacher matches the given query.")
        return queryset

    

class ResearchViewSet(viewsets.ModelViewSet):
    queryset = Research.objects.all()
    serializer_class = ResearchSerializer


class NoticeViewSet(viewsets.ModelViewSet):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer


class NoticeByID(viewsets.ModelViewSet):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
    lookup_field = 'pk'

    def get_object(self):
        notice_id = self.kwargs.get('pk')
        print(notice_id)
        queryset = self.get_queryset().get(pk=notice_id)
        if queryset is None:
            raise Http404("No Notice matches the given query.")
        return queryset