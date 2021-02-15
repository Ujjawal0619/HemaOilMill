# Generated by Django 3.1.6 on 2021-02-13 16:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('millapi', '0005_employee_emppayment'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='empPayment',
        ),
        migrations.AddField(
            model_name='emppayment',
            name='employee',
            field=models.ForeignKey(default=100, on_delete=django.db.models.deletion.CASCADE, to='millapi.employee'),
            preserve_default=False,
        ),
    ]
