# Generated by Django 5.1 on 2024-08-19 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ourteamsettings',
            name='image',
            field=models.ImageField(default='', upload_to='media_storage/team_img'),
        ),
    ]