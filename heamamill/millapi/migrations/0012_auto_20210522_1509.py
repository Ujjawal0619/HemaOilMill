# Generated by Django 3.1.7 on 2021-05-22 09:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('millapi', '0011_auto_20210304_1630'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='identity',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='photo',
        ),
    ]