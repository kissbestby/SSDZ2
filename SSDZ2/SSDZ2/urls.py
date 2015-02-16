from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
	# Examples:
	url(r'^$', 'SSDZ2.views.home', name='home'),
	# url(r'^blog/', include('blog.urls')),

	url(r'^admin/', include(admin.site.urls)),
	url(r'^sci/', include('apps.sci.urls')),
	url(r'^news/', include('apps.news.urls')),
)
