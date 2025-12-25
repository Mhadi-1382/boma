from django.urls import path
from core import views

urlpatterns = [
    path('', view=views.home, name='home'),
]
