from django.db import models
from django.contrib.auth.models import User



class Lead(models.Model):
	# make it a charfield for now
	username = models.CharField(max_length = 30)
	user = models.ForeignKey(User, related_name="leads", on_delete = models.CASCADE, null=True)
	message = models.CharField(max_length = 400, blank=True)
	timestamp = models.DateTimeField(auto_now_add=True)
	# make problem a charfield for now
	problem = models.CharField(max_length=200)