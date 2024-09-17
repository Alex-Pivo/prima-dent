from . models import OurTeamSettings,Reviews,MainPageSettings,AboutUsPage,Galery
from rest_framework import serializers

class OurTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurTeamSettings
        fields = '__all__'

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'

class MainPageSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainPageSettings
        fields = '__all__'

class AboutUsPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsPage
        fields = '__all__'

class GalerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Galery
        fields = '__all__'