# Generated by Django 5.0.2 on 2024-09-16 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_ourteamsettings_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Galery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='', upload_to='media_storage/galery_img')),
            ],
            options={
                'verbose_name': 'Фото для "Галереї"',
                'verbose_name_plural': 'Фотографії "Галереї"',
            },
        ),
        migrations.DeleteModel(
            name='Appointment',
        ),
        migrations.AlterModelOptions(
            name='aboutuspage',
            options={'verbose_name': 'Зміна фото в блоці "Хто ми"', 'verbose_name_plural': 'Зміна фото в блоці "Хто ми"'},
        ),
        migrations.AlterModelOptions(
            name='mainpagesettings',
            options={'verbose_name': 'Налаштування головної сторінки', 'verbose_name_plural': 'Налаштування головної сторінки'},
        ),
        migrations.AlterModelOptions(
            name='ourteamsettings',
            options={'verbose_name': 'Команда Primadent', 'verbose_name_plural': 'Команда Primadent'},
        ),
        migrations.AlterModelOptions(
            name='reviews',
            options={'verbose_name': 'Відгук', 'verbose_name_plural': 'Відгуки'},
        ),
    ]