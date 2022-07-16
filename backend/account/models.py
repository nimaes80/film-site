from django.contrib.auth.models import AbstractUser
from django.db import models
from sinema.models import Film

# Create your models here.


class User(AbstractUser):
	email = models.EmailField(unique=True)
	films = models.ManyToManyField(Film, blank=True, default=None)
	phone = models.CharField(unique=True, max_length=11, )
	country_code = models.CharField(max_length=3, default='+98', )
	is_phone_verified = models.BooleanField(default=False)



