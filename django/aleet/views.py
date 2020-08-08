from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def ping(request):
	if request.method == "POST":
		data = {}
		data['message'] = 'success'
		return JsonResponse(data)