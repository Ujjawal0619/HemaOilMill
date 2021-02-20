from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('millapi.urls')),
    path('api/gettoken', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/verifytoken', TokenVerifyView.as_view(), name='token_verify'),
    path('api/refreshtoken', TokenRefreshView.as_view(), name='token_refresh'),
]
