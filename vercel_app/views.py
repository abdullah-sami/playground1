from django.http import HttpResponse

def index(request):
    html = 'It\'s working'
    return HttpResponse(html)
