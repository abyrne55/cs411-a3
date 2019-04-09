from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404
from .models import Strain
import json

def strain_list_to_json(strain_list):
    out = list()
    for strain in strain_list:
        s = dict(strain.__dict__)
        del s['_state']
        out.append(s)
    return json.dumps(out)

def index(request):
    strain_list = Strain.objects.all()[:5]
    return HttpResponse(strain_list_to_json(strain_list), content_type='application/json')
    
def strain(request, id):
    strain = get_object_or_404(Strain, pk=id)
    return HttpResponse(strain.to_json(), content_type='application/json')
    
def search(request):
    valid_query = False
    query = Strain.objects
    
    # Chain together parameters
    if 'name' in request.GET:
        query = query.filter(name__icontains=request.GET['name'])
        valid_query = True
    if 'description' in request.GET:
        query = query.filter(description__icontains=request.GET['description'])
        valid_query = True
    if 'strain_type' in request.GET:
        query = query.filter(strain_type__icontains=request.GET['strain_type'])
        valid_query = True
    if 'effects' in request.GET:
        query = query.filter(effects__icontains=request.GET['effects'])
        valid_query = True
    if 'ailment' in request.GET:
        query = query.filter(ailment__icontains=request.GET['ailment'])
        valid_query = True
    if 'flavor' in request.GET:
        query = query.filter(flavor__icontains=request.GET['flavor'])
        valid_query = True
    
    if not valid_query:
        return Http404
    
    return HttpResponse(strain_list_to_json(query), content_type='application/json')