from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

# Serializers

class UserSerializer(ModelSerializer):

	class Meta:
		model = User
		exclude = ('password', )


class UserCreationSerializer(ModelSerializer):

	class Meta:
		model = User
		fields = ('username', 'password', 'email',  'country_code', 'phone',  )




class UserTokenObtainPairSerializer(TokenObtainPairSerializer):
	@classmethod
	def get_token(cls, user):
		token = super().get_token(user)

		token['name'] = user.get_full_name()
		token['first_name'] = user.first_name
		token['last_name'] = user.last_name
		token['username'] = user.username
		token['email'] = user.email
		token['phone'] = user.phone
		token['country'] = user.country
		token['is_superuser'] = user.is_superuser
		token['is_staff'] = user.is_staff

		return token
