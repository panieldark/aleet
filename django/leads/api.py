from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

class LeadViewSet(viewsets.ModelViewSet):
	permission_classes = [
		permissions.IsAuthenticated
	]
	
	serializer_class = LeadSerializer

	def get_queryset(self):
		return Lead.objects.filter(~Q(user = self.request.user))

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)
	

