from django.contrib import admin
from . models import (OurTeamSettings,
                      Reviews,MainPageSettings,
                      AboutUsPage,Galery)




class MyAdminSite(admin.AdminSite):
    site_header = 'Primadent Адмін-панель'
    site_title = 'Адмін-панель'
    index_title = 'Primadent'

my_admin_site = MyAdminSite(name='my_admin_site')

@admin.register(MainPageSettings, site=my_admin_site)
class MainPageSettingsAdmin(admin.ModelAdmin):
    pass

@admin.register(OurTeamSettings, site=my_admin_site)
class OurTeamSettingsAdmin(admin.ModelAdmin):
    pass

@admin.register(Reviews, site=my_admin_site)
class ReviewsAdmin(admin.ModelAdmin):
    pass

@admin.register(AboutUsPage, site=my_admin_site)
class AboutUsPageAdmin(admin.ModelAdmin):
    pass

@admin.register(Galery,site=my_admin_site)
class GaleryAdmin(admin.ModelAdmin):
    pass