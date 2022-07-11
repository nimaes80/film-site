from django.db import models
	
class TimeStamp(models.Model):

	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)


	class Meta:
		abstract = True
		ordering = ('-created_at', '-updated_at', '-id', )


class SEO(models.Model):
	title = models.CharField(max_length=250, db_index=True, unique=True)
	description = models.CharField(max_length=250, db_index=True)
	keywords = models.CharField(max_length=250, db_index=True)
	

	class Meta:
		abstract = True
		indexes = (
			models.Index(fields=['title', 'keywords', 'description']),
			models.Index(fields=['title'], name='title_idx'),
		)
		
