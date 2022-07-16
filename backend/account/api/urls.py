from account.api.views import UserTokenObtainPairView, UserViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

router = DefaultRouter()



router.register('users', UserViewSet, basename='user')



app_name = 'account_api'
urlpatterns = [
	path('', include(router.urls), ),
	
	path('login/', UserTokenObtainPairView.as_view(), name="login"),
	path('refresh/', TokenRefreshView.as_view(), name='refresh_login'),

]



