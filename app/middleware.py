# myapp/middleware.py

import time
from django.utils.deprecation import MiddlewareMixin

class SimpleLoggingMiddleware(MiddlewareMixin):
    def process_request(self, request):
        request.start_time = time.time()

    def process_response(self, request, response):
        duration = time.time() - getattr(request, 'start_time', time.time())
        print(f"Request to {request.path} took {duration:.4f} seconds")
        return response
