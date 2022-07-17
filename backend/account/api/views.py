from account.api.permissions import UserPermissions
from account.api.serializers import (UserCreationSerializer, UserSerializer,
                                     UserTokenObtainPairSerializer)
from account.tokens import account_activation_token
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.core.mail import EmailMessage
from django.db.models import Q
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED,
                                   HTTP_406_NOT_ACCEPTABLE)
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.views import TokenObtainPairView

User = get_user_model()


# Views

class UserTokenObtainPairView(TokenObtainPairView):
	serializer_class = UserTokenObtainPairSerializer






class UserViewSet(ModelViewSet):
	queryset = User.objects.all()
	permission_classes = [UserPermissions, ]
	

	def get_serializer_class(self):
		if self.action == 'create':
			return UserCreationSerializer
		else:
			return UserSerializer
				


	def create(self, request):
		data = request.data
		serializer = self.get_serializer(data=data)
		serializer.is_valid(raise_exception=True)
		user = User(username=data['username'], email=data['email'], phone=data['phone'], country_code=data['country_code'], is_active=False)
		user.set_password(data['password'])
		user.save()

		message = render_to_string('account/registration_email.html', {
			'user': user,
			"domin": 'localhost:8000',
			'uid':urlsafe_base64_encode(force_bytes(user.pk)),
			'token':account_activation_token.make_token(user),
		})
		email = EmailMessage(
					'فعال سازی حساب کاربری',
					message,
					to=[data['email']]
		)
		email.send()
		return Response('Vrification Email was sent to user', status=HTTP_201_CREATED)


	@action(methods=['GET',], detail=False)
	def activate(request, uidb64, token):
		uidb64 = request.GET.get('uidb64')
		token = request.GET.get('token')
		try:
			uid = force_str(urlsafe_base64_decode(uidb64))
			user = User.objects.get(pk=uid)
			if account_activation_token.check_token(user, token):
				user.is_active = True
				user.save()
				return Response('Thank you for your email confirmation. Now you can login your account.')

		except(TypeError, ValueError, OverflowError, User.DoesNotExist):
			...
		
		return Response("Invalid/Outdated activation code.", status=HTTP_406_NOT_ACCEPTABLE)
