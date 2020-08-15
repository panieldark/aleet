from django.db import models

# Create your models here.

class Lead(models.Model):
	# make it a charfield for now
	username = models.CharField(max_length = 30)
	message = models.CharField(max_length = 400, blank=True)
	timestamp = models.DateTimeField(auto_now_add=True)
	# make problem a charfield for now
	problem = models.CharField(max_length=200)