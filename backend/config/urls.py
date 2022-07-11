from django.conf import settings
from django.contrib import admin
from django.urls import include, path

app_name = 'config'
urlpatterns = [
	path('admin/', admin.site.urls),

	path('account/', include('account.urls')),
	path('sinema/', include('sinema.urls')),

	path('api/account/', include('account.api.urls')),
	path('api/sinema/', include('sinema.api.urls')),
]


if settings.DEBUG:
	from django.conf.urls.static import static
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


