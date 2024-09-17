from django.db import models

class MainPageSettings(models.Model):
    main_image = models.ImageField(upload_to='media_storge/mainpage_img',verbose_name='Фото головної сторіник')
    main_text = models.TextField(verbose_name='Головне речення сайту(h1)')
    second_text = models.TextField(verbose_name='Другорядне речення сайту(h2)')

    class Meta:
        verbose_name='Налаштування головної сторінки'
        verbose_name_plural='Налаштування головної сторінки'

    def __str__(self):
        return self.main_image
class AboutUsPage(models.Model):
    about_us_img = models.ImageField(upload_to='media_storage/aboutus_img',verbose_name='Фото блоку "Хто ми"')
    class Meta:
        verbose_name='Зміна фото в блоці "Хто ми"'
        verbose_name_plural='Зміна фото в блоці "Хто ми"'

    def __str__(self):
        return self.about_us_img
class OurTeamSettings(models.Model):
    name = models.TextField(verbose_name="ПІБ лікаря")
    stage = models.TextField(verbose_name="Посада лікаря")
    description = models.TextField(verbose_name="Опис лікаря")
    image = models.ImageField(upload_to='media_storage/team_img',default='')
    class Meta:
        verbose_name='Команда Primadent'
        verbose_name_plural='Команда Primadent'

    def __str__(self):
        return self.name

class Reviews(models.Model):
    name = models.TextField(verbose_name="Ім'я людини")
    review_text = models.TextField(verbose_name="Відгук")
    start_count = models.FloatField(verbose_name='Кількість зірок до 5(наприклад: 4.5,4.3,5)')
    class Meta:
        verbose_name='Відгук'
        verbose_name_plural='Відгуки'

    def __str__(self):
        return self.name


class Galery(models.Model):
    image = models.ImageField(upload_to='media_storage/galery_img',default='')

    class Meta:
        verbose_name='Фото для "Галереї"'
        verbose_name_plural='Фотографії "Галереї"'

