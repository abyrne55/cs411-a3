# Generated by Django 2.2 on 2019-04-09 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Strain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('description', models.TextField(blank=True, max_length=1024)),
                ('strain_type', models.CharField(blank=True, choices=[('SAT', 'Sativa'), ('HYB', 'Hybrid'), ('IND', 'Indica')], max_length=3)),
                ('effects', models.CharField(blank=True, max_length=512)),
                ('ailment', models.CharField(blank=True, max_length=512)),
                ('flavor', models.CharField(blank=True, max_length=512)),
            ],
        ),
    ]
