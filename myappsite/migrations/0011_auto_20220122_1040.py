# Generated by Django 3.2.9 on 2022-01-22 01:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myappsite', '0010_alter_task_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='list',
            name='listId',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='task',
            name='taskId',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
