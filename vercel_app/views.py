from django.http import HttpResponse

def index(request):
    now = datetime.now()
    html = 'It\'s working'
    return HttpResponse(html)
