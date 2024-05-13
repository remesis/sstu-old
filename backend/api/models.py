from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Notice(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    pdf = models.FileField(upload_to='notice/pdf', null=True, blank=True)
    image = models.ImageField(upload_to='notice/thumbnail', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title or "Untitled Notice"

class Event(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='event/thumbnail', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title or "Untitled Event"

class News(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/news', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title or "Untitled News"

class Gallery(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='images/gallery', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title or "Untitled Gallery"

class Contact(models.Model):
    phone = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class About(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title or "Untitled About"

class Department(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/department', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name or "Unnamed Department"

class Education(models.Model):
    user = models.ForeignKey(User, related_name='education', on_delete=models.CASCADE, null=True, blank=True)
    degree = models.CharField(max_length=100, null=True, blank=True)
    institute = models.CharField(max_length=100, null=True, blank=True)
    year = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.degree or "Unnamed Education"

class Work(models.Model):
    user = models.ForeignKey(User, related_name='work', on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    company = models.CharField(max_length=100, null=True, blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title or "Untitled Work"

class Teacher(models.Model):
    user = models.ForeignKey(User, related_name='teacher', on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    designation = models.CharField(max_length=100, null=True, blank=True)
    department = models.CharField(max_length=100, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)

    room = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)

    image = models.ImageField(upload_to='images/teacher', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name or "Unnamed Teacher"