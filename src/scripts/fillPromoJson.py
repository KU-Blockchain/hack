## script to fill the json file with the data from the csv file
import numpy as np
import json

applicant_data = np.loadtxt('src/scripts/PromoList.csv', skiprows=1, dtype=str, usecols=[0])
applicants = []

for applicant in applicant_data:
    applicant_dict = {}
    applicant_dict['email'] = applicant
    #applicant_dict['email'] = applicant[1]
    applicants.append(applicant_dict)

with open('src/scripts/promoList.json', 'w') as f:
    f.write(json.dumps(applicants, indent=2))