from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

# Urls 



schema_view = get_schema_view(
   openapi.Info(
      title="FILOOP API",
      default_version='v1',
      description="FILOOP is a Film Sharing website",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@filoop.ir"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)




app_name = 'config'
urlpatterns = [
	path('admin/', admin.site.urls),

	path('account/', include('account.urls')),
	path('sinema/', include('sinema.urls')),

	path('api/account/', include('account.api.urls')),
	path('api/sinema/', include('sinema.api.urls')),

	re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]


if settings.DEBUG:
	from django.conf.urls.static import static
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


