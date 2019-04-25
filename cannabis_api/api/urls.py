from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('strain/<int:id>/', views.strain, name='strain'),
    path('search', views.search, name='search'),
]