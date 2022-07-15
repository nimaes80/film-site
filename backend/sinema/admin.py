from django.contrib import admin

from sinema.models import (Actor, Agent, Category, Country, Film, Job, Season,
                           SoundAndSubtitle, Video)

# Register your models here.


admin.site.register(Job)
admin.site.register(Agent)
admin.site.register(Actor)
admin.site.register(SoundAndSubtitle)
admin.site.register(Country)
admin.site.register(Category)
admin.site.register(Video)
admin.site.register(Season)
admin.site.register(Film)
