# Generated by Django 2.2.4 on 2019-12-09 17:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('note', '0003_todo_is_done'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='deadline',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='todo',
            name='importance',
            field=models.CharField(choices=[('C', 'Обычно'), ('B', 'Важно'), ('A', 'Срочно!')], default='C', max_length=1),
        ),
    ]
