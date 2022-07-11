from django.db import models
from django.utils.translation import gettext_lazy as _
	
class TimeStamp(models.Model):

	created_at = models.DateTimeField(verbose_name=_('ساخته شده در'), auto_now_add=True)
	updated_at = models.DateTimeField(verbose_name=_('ویرایش شده در'), auto_now=True)


	class Meta:
		abstract = True
		ordering = ('-created_at', '-updated_at', '-id', )


class SEO(models.Model):
	title = models.CharField(verbose_name=_('عنوان'), max_length=250, db_index=True, unique=True)
	description = models.CharField(verbose_name=_('توضیحات'), max_length=250, db_index=True)
	keywords = models.CharField(verbose_name=_('کلمات کلیدی'), max_length=250, db_index=True)
	

	class Meta:
		abstract = True
		indexes = (
			models.Index(fields=['title', 'keywords', 'description']),
			models.Index(fields=['title'], name='title_idx'),
		)
		
