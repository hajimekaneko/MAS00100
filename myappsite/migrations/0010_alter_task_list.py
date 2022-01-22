# Generated by Django 3.2.9 on 2021-12-19 06:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myappsite', '0009_alter_task_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='list',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='tasks', to='myappsite.list', verbose_name='リスト'),
        ),
    ]