from django.contrib import admin

from sinema.models import Job, Agent, Actor, SoundAndSubtitle, Country, Category, Video, Season, Film

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
