from django.http import HttpResponse
from django.shortcuts import render


def index(request):

    return render(request, 'index.html')



def services(request):

    return render(request, 'services.html')




def team(request):

    return render(request, 'team.html')





def pricing(request):

    return render(request, 'pricing.html')





def contact(request):

    return render(request, 'contact.html')



