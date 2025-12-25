from django.shortcuts import render, redirect
from .send_notify import config_notify

def home(request):
    return render(request, "index.html")


def send_notify(request):
    if not request.user.is_superuser:
        return redirect('/')

    if request.user.is_authenticated:
        if request.method == 'POST':
            title = request.POST.get('sendNotifyTitle')
            content = request.POST.get('sendNotifyContent')
            icon = request.POST.get('sendNotifyIcon')
            link = request.POST.get('sendNotifyDeepLink')

            config_notify(title=title, content=content, icon=icon, link=link)
            return redirect('/')
        else:
            return redirect('/')
    else:
        return redirect('/')
