from django.urls import path
from . import views  # 這裡應該是 views，不是 view

urlpatterns = [
    # path('', views.HelloApiView.as_view(), name='indexs'),
    path('add', views.add_post, name='add_post'),
    path('list', views.list_post, name='list_post'),
]
