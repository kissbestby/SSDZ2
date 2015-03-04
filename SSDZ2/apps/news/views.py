from django.shortcuts import render_to_response

# Create your views here.
def main(request):
	return render_to_response('news_center_main.html')


def article(request):
	return render_to_response('news_center_article.html')