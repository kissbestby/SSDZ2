from django.conf.urls import patterns, url

urlpatterns = patterns('apps.sci.views',
	url(r'^$', 'main'),
	url(r'^achievement/$', 'achievement'),
	)