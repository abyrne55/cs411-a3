"""
Upload a CSV containing cannabis strain information to Django's DB
"""
# To run, load this script into an instance of ./manage.py shell

from api.models import Strain
import csv
import sys
MUST_HAVE_FIELDS = ['id','name','type','effects','ailment','flavor']

def is_invalid(string):
    return (not string or 'NULL' in string or string == '0')

counter = 0
skipped = 0

with open("data/strains-kushy_api.2017-11-14.csv", newline='') as csvfile:
    # Load file and verify header row
    csvreader = csv.DictReader(csvfile)
    if not set(MUST_HAVE_FIELDS).issubset(set(csvreader.fieldnames)):
        raise Exception("Input file does not contain required fields") 
    
    # Loop over each row
    for row in csvreader:
        # Ensure we have some effects to list out
        if is_invalid(row['name']) or is_invalid(row['effects']):
            skipped += 1
            continue
        try:
            # Create an object with the already-validated fields
            strain = Strain.objects.create(id=int(row['id']), name=row['name'], effects=row['effects'])
            # Process the "easy-to-validate" fields
            strain.ailment = row['ailment'] if not is_invalid(row['ailment']) else ''
            strain.flavor = row['flavor'] if not is_invalid(row['flavor']) else ''
            # Process strain type
            if "sativa" in row['type'].lower():
                strain.strain_type = 'Sativa'
            elif "hybrid" in row['type'].lower():
                strain.strain_type = 'Hybrid'
            elif "indica" in row['type'].lower():
                strain.strain_type = 'Indica'
            else:
                strain.strain_type = ''
            
            # Finally, save to DB
            strain.save()
        except:
            print("Unexpected error on strain {}".format(row['id']))
            display(sys.exc_info())
        
        counter += 1
        if counter % 100 == 0:
            print("Processed {} strains".format(counter))
        
print("Finished processing {} strains, skipped {}".format(counter, skipped))
    