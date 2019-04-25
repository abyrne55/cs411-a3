from django.contrib import admin

# Register your models here.
from .models import Strain

@admin.register(Strain)
class StrainAdmin(admin.ModelAdmin):
    ordering = ['id']
    list_display = ('name', 'strain_type', 'id')