# Generated by Django 5.1 on 2024-08-19 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUsPage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about_us_img', models.ImageField(upload_to='media_storage/aboutus_img', verbose_name='Фото блоку "Хто ми"')),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(verbose_name="Ім'я пацієнта")),
                ('phone', models.CharField(max_length=20, verbose_name="Ім'я пацієнта")),
                ('short_descr', models.TextField(verbose_name='Короткий опис запиту')),
                ('date', models.DateField(verbose_name='Дата запису')),
            ],
        ),
        migrations.CreateModel(
            name='MainPageSettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('main_image', models.ImageField(upload_to='media_storge/mainpage_img', verbose_name='Фото головної сторіник')),
                ('main_text', models.TextField(verbose_name='Головне речення сайту(h1)')),
                ('second_text', models.TextField(verbose_name='Другорядне речення сайту(h2)')),
            ],
        ),
        migrations.CreateModel(
            name='OurTeamSettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(verbose_name='ПІБ лікаря')),
                ('stage', models.TextField(verbose_name='Посада лікаря')),
                ('description', models.TextField(verbose_name='Опис лікаря')),
            ],
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(verbose_name="Ім'я людини")),
                ('review_text', models.TextField(verbose_name='Відгук')),
                ('start_count', models.FloatField(verbose_name='Кількість зірок до 5(наприклад: 4.5,4.3,5)')),
            ],
        ),
    ]
