# Generated by Django 4.0.6 on 2022-07-11 08:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('sinema', '0003_alter_actor_created_at_alter_actor_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='publish',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
