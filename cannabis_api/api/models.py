from django.db import models
import json

# Create your models here.
class Strain(models.Model):
    TYPE_CHOICES = (
        ('Sativa', 'Sativa'),
        ('Hybrid', 'Hybrid'),
        ('Indica', 'Indica'),
    )
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(max_length=1024, blank=True)
    strain_type = models.CharField(max_length=6, choices=TYPE_CHOICES, blank=True)
    effects = models.CharField(max_length=512, blank=True)
    ailment = models.CharField(max_length=512, blank=True)
    flavor = models.CharField(max_length=512, blank=True)
    
    def to_json(self):
        s = dict(self.__dict__)
        del s['_state']
        return json.dumps(s)
    