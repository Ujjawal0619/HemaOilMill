# Generated by Django 3.1.6 on 2021-02-12 15:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('millapi', '0003_auto_20210212_2014'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='emppayment',
            name='employee',
        ),
    ]
