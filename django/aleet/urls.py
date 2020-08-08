
from django.contrib import admin
from django.urls import path

from .views import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ping, name="ping"),
    path('get_token', give_token, name="give_token")
]
