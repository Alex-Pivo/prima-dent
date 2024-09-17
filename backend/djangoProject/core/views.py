from . models import OurTeamSettings,Reviews,MainPageSettings,AboutUsPage,Galery
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from . import serializers
import os
import datetime
from django.shortcuts import redirect
from django.http import HttpResponse
from rest_framework import status

class OurTeamView(APIView):
    def get(self,request):
        return Response(serializers.OurTeamSerializer(
            OurTeamSettings.objects.all(),
            many=True).data,status=status.HTTP_200_OK)

class ReviewsView(APIView):
    def get(self,request):
        return Response(serializers.ReviewsSerializer(
            Reviews.objects.all(),many=True).data,
                         status=status.HTTP_200_OK)

class MainPageSettingsView(APIView):
    def get(self,request):
        return Response(serializers.MainPageSettingsSerializer(
            MainPageSettings.objects.all(),many=True).data,
                         status=status.HTTP_200_OK)


class AboutUsPageView(APIView):
    def get(self,request):
        return Response(serializers.AboutUsPageSerializer(
            AboutUsPage.objects.all(),many=True).data,
                         status=status.HTTP_200_OK)


class GaleryView(APIView):
    def get(self,request):
        return Response(serializers.GalerySerializer(
            Galery.objects.all(),many=True).data,status=status.HTTP_200_OK)





#-------------------------Appointment LOGIC[google-sheet-api]------------------------------------
# SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']




# class OAuth2CallbackView(APIView):
#     def get(self, request):
#         code = request.GET.get('code')
#         if not code:
#             return HttpResponse('Authorization code not found', status=400)
#
#         flow = InstalledAppFlow.from_client_secrets_file(
#             'credentials.json', SCOPES)
#         flow.fetch_token(code=code)
#         creds = flow.credentials
#
#         # Сохраните учетные данные для последующих запросов
#         with open('token.json', 'w') as token:
#             token.write(creds.to_json())
#
#         return redirect('/appointments/')

