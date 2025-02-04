## script to fill the json file with the data from the csv file
import numpy as np
import json

applicant_data = np.loadtxt('Applications.csv', skiprows=1, delimiter=',', dtype=str, usecols=[2,4])
applicants = []

for applicant in applicant_data:
    applicant_dict = {}
    applicant_dict['name'] = applicant[0]
    applicant_dict['email'] = applicant[1]
    applicants.append(applicant_dict)

with open('applicants.json', 'w') as f:
    f.write(json.dumps(applicants, indent=2))