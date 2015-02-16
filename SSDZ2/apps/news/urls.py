from django.conf.urls import url, patterns

urlpatterns = patterns('apps.news.views',
	url(r'^$', 'main'),
	url(r'^article/$', 'article'),
	)