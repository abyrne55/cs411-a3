# Generated by Django 2.2 on 2019-04-09 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='strain',
            name='strain_type',
            field=models.CharField(blank=True, choices=[('Sativa', 'Sativa'), ('Hybrid', 'Hybrid'), ('Indica', 'Indica')], max_length=6),
        ),
    ]
