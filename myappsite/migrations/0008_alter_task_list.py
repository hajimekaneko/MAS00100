# Generated by Django 3.2.9 on 2021-12-19 05:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myappsite', '0007_task_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='list',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, to='myappsite.list', verbose_name='リスト'),
            preserve_default=False,
        ),
    ]