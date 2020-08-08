from django.http import JsonResponse
from django.middleware.csrf import get_token

def ping(request):
	if request.method == "POST":
		data = {}
		data['message'] = 'success'
		return JsonResponse(data)

def give_token(request):
	csrf_token = get_token(request)
	return JsonResponse({'csrf': csrf_token})