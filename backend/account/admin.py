from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from account.models import User

# Register your models here.


admin.site.site_title = 'Film Site Admin'
admin.site.site_header = 'Film Site Admin'



UserAdmin.fieldsets += (
	"Optional Data", 
		{"fields": ("films", ), }
	),

admin.site.register(User, UserAdmin)
