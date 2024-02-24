from django.urls import path, include, re_path #re_path -> Ruta de expresion regular
from django.views.generic import TemplateView #Esta vista de template me servirá para ReactJS

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
