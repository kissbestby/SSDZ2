from django.shortcuts import render_to_response

# Create your views here.
def main(request):
	return render_to_response('scientific-research-main.html')

def achievement(request):
	return render_to_response('scientific-research_achievement.html')