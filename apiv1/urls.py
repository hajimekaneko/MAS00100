from django.urls import path, include
from rest_framework import routers

from . import views

# router = routers.DefaultRouter()
# router.register('auth_login', views.AuthLoginAPIView)

app_name = 'apiv1'
urlpatterns = [
    # path('auth/login/', include(router.urls)),
    path('auth/login/', views.AuthLoginAPIView.as_view()),
    path('auth/logout/', views.AuthLogoutAPIView.as_view()),
    path('auth/list/', views.GetListAPIView.as_view()),
]


