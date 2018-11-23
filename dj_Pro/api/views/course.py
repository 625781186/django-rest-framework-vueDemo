from rest_framework.views import APIView
# 需要在settings里注册  'rest_framework',
from rest_framework.response import Response


class CourseView(APIView):
    # 1.html 渲染器
    # from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
    # renderer_classes = [
    #                     JSONRenderer,
    #                     BrowsableAPIRenderer,
    #                     ]

    # 2.版本控制器
    # from rest_framework.versioning import BaseVersioning
    # versioning_class = []
    def get(self, request, *args, **kwargs):
        print(request.version)
        ret = {
            'code': 1000,
            'data': [
                {'id': 1, 'title': 'python1'},
                {'id': 2, 'title': 'python2'},
                {'id': 3, 'title': 'python3'},
            ]
        }
        return Response(ret)
