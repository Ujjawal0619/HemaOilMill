# Generated by Django 3.1.7 on 2021-03-04 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('millapi', '0009_auto_20210303_2151'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dues',
            old_name='amount',
            new_name='due',
        ),
        migrations.AddField(
            model_name='dues',
            name='paid',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=6),
        ),
        migrations.AddField(
            model_name='dues',
            name='total',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=6),
        ),
    ]
