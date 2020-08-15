
from django.urls import path, include
from .views import *
urlpatterns = [
    path('', include('leads.urls')),
    path('get_token', give_token, name="give_token"),

]
