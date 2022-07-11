from django.contrib.auth.models import AbstractUser
from django.db import models
from sinema.models import Film

# Create your models here.


class User(AbstractUser):
	email = models.EmailField(unique=True)
	films = models.ManyToManyField(Film, blank=True, default=None)

