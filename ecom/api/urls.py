from django.urls import path,include
from rest_framework.authtoken import views
from .views import home

urlpatterns = [
    path('',home,name='api.home'),
    path('api-token-auth/',views.obtain_auth_token,name='api_token_auth'),
    path('category/',include('api.category.urls')),
    path('product/',include('api.product.urls')),
    path('account/',include('api.account.urls')),
    path('order/',include('api.order.urls')),
    path('payment/',include('api.payment.urls')),
] 