from django.db import models
from django.utils.timezone import now
from meta.models import SEO, TimeStamp

# Create your models here.


class Job(TimeStamp):
	title = models.CharField(max_length=100, unique=True, db_index=True)

	def __str__(self) -> str:
		return self.title

	class Meta:
		indexes = [
            models.Index(fields=['title']),
        ]


class Agent(TimeStamp, SEO):
	name = models.CharField(max_length=100, unique=True, db_index=True)
	job = models.ManyToManyField(Job, related_name='agent_job')
	slug = models.SlugField(max_length=100, unique=True, allow_unicode=True, db_index=True)

	def __str__(self) -> str:
		return self.name


	class Meta:
		indexes = [
            models.Index(fields=['name', 'slug' ]),
        ]

class Actor(TimeStamp, SEO):
	name = models.CharField(max_length=100, unique=True, db_index=True)
	slug = models.SlugField(max_length=100, unique=True, allow_unicode=True, db_index=True)

	def __str__(self) -> str:
		return self.name


	class Meta:
		indexes = [
            models.Index(fields=['name', 'slug' ]),
        ]




class Country(TimeStamp, SEO):
	name = models.CharField(max_length=100, unique=True, db_index=True)
	slug = models.SlugField(max_length=100, unique=True, allow_unicode=True, db_index=True)

	def __str__(self) -> str:
		return self.name



	class Meta:
		indexes = [
            models.Index(fields=['name', 'slug' ]),
        ]


class Category(TimeStamp, SEO):
	name = models.CharField(max_length=100, unique=True, db_index=True)
	slug = models.SlugField(max_length=100, unique=True, allow_unicode=True, db_index=True)
	parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)

	def __str__(self) -> str:
		return self.name



	class Meta:
		indexes = [
            models.Index(fields=['name', 'slug' ]),
        ]



class SoundAndSubtitle(TimeStamp):
	name = models.CharField(max_length=100, unique=True, db_index=True)
	sound_and_subtitle = models.FileField(upload_to='private/sinema/SoundAndSubtitle/')

	def __str__(self) -> str:
		return self.name


	class Meta:
		indexes = [
            models.Index(fields=['name', ]),
        ]



class Video(TimeStamp):
	name = models.CharField(max_length=100, unique=True, db_index=True)
	file = models.FileField(upload_to='private/sinema/video/')
	qulaity = models.PositiveSmallIntegerField(default=720)

	def __str__(self) -> str:
		return self.name


	@property
	def url(self):
		return self.file.url


	class Meta:
		indexes = [
            models.Index(fields=['name', ]),
        ]



class Part(TimeStamp):
	name = models.CharField(max_length=100, unique=True, db_index=True)
	film = models.ManyToManyField(Video, related_name='part_videos', )
	sound_and_subtitle = models.ManyToManyField(SoundAndSubtitle, related_name='part_sound_and_subtitle', blank=True, default=None)
	

	def __str__(self) -> str:
		return self.name


	class Meta:
		indexes = [
            models.Index(fields=['name', ]),
        ]



class Season(TimeStamp):
	name = models.CharField(max_length=100, unique=True, db_index=True)
	parts = models.ManyToManyField(Part, related_name='season_part')

	def __str__(self) -> str:
		return self.name


	class Meta:
		indexes = [
            models.Index(fields=['name', ]),
        ]




class Film(TimeStamp, SEO):
	name = models.CharField(max_length=255, unique=True, db_index=True)
	abstract = models.TextField()
	image = models.ImageField(upload_to='public/sinema/images/%Y/%M')
	publish = models.DateField(default=now)
	age = models.PositiveSmallIntegerField(default=10)
	country = models.ForeignKey(Country, on_delete=models.PROTECT)
	IMDB_score = models.FloatField(default=5.0)
	season = models.ManyToManyField(Season, related_name='film_season')
	categorys = models.ManyToManyField(Category, related_name='film_category')
	agents = models.ManyToManyField(Agent, related_name='film_agent')
	actors = models.ManyToManyField(Actor, related_name='film_actors')




	def __str__(self) -> str:
		return self.name


	class Meta:
		indexes = [
            models.Index(fields=['name', ]),
        ]







