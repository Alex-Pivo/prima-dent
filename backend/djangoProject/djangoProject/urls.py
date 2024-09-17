from django.contrib import admin
from django.urls import path, include
from core import urls as core_urls
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/v1/', include(core_urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
