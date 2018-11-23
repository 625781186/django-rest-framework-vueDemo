from django.middleware.common import MiddlewareMixin


class CORSMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        # response['xxx'] = 8888

        response['Access-Control-Allow-Origin'] = "*"

        return response
