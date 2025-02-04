## script to fill the json file with the data from the csv file
import numpy as np

applicant_data = np.loadtxt('applicant_data.csv', delimiter=',', dtype=str)

print(applicant_data)