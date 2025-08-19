from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('preferences/', views.alert_preferences, name='alert_preferences'),
    path('save-entity/<int:entity_id>/', views.save_entity, name='save_entity'),
    path('remove-entity/<int:entity_id>/', views.remove_entity, name='remove_entity'),
]