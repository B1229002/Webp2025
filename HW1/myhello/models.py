from django.db import models

# Create your models here.
from django.db import models


class Post(models.Model):
    Department = models.CharField(max_length=100)  # 使用 CharField 來設置最大長度
    Course_Title = models.TextField(blank=True)    # 如果允許空值，可以保留 blank=True
    Instructor = models.TextField(blank=True)      # 如果允許空值，可以保留 blank=True
