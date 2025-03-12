from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.decorators import api_view
import json
import logging
from django.core.serializers.json import DjangoJSONEncoder
from .models import Post  # 确保 models.py 文件中有 Post 模型

# 设置日志记录
logger = logging.getLogger('django')


#class HelloApiView(APIView):
#    def get(self, request):
 #       my_name = request.GET.get('name')  # 取得 GET 参数 name
#
 #       if my_name:
  #          retValue = {"data": f"Hello {my_name}"}
  #          return Response(retValue, status=status.HTTP_200_OK)
   #     else:
        #    return Response(
   #             {"res": "parameter: name is None"},
  #              status=status.HTTP_400_BAD_REQUEST
 #           )


@api_view(['GET'])
def add_post(request):
    Department = request.GET.get('Department', '')
    Course_Title = request.GET.get('Course_Title', '')
    Instructor = request.GET.get('Instructor', '')

    
    new_post = Post()
    new_post.Department = Department
    new_post.Course_Title = Course_Title
    new_post.Instructor = Instructor

    new_post.save()
    logger.debug(" ***************** my Course_Table" + Department)
    if Department:
        return Response({"data": Department + "insert!"}, status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values() 
    return JsonResponse(list(posts),safe=False)
    '''return Response(
        {"data": 
         json.dumps(
             list(posts), 
             sort_keys=True, 
             indent=1, 
             cls=DjangoJSONEncoder)},
        status=status.HTTP_200_OK
    )'''
