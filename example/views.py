# example/views.py
from datetime import datetime

from django.http import HttpResponse

def index(request):
    now = datetime.now()
    html = 'Hello world!'
    return HttpResponse(html)
