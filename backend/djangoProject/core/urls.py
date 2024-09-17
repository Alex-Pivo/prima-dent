from django.urls import path
from .admin import my_admin_site
from . import views

urlpatterns = [
    path('admin/', my_admin_site.urls),
    path('ourteam/', views.OurTeamView.as_view(), name='ourteam'),
    path('reviews/', views.ReviewsView.as_view(), name='reviews'),
    path('mainpage/', views.MainPageSettingsView.as_view(), name='mainpage'),
    path('about-us/', views.AboutUsPageView.as_view(), name='about-us'),
    path('galery',views.GaleryView.as_view(),name='galery')

]