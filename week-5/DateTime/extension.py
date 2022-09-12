from datetime import datetime

input_bday = input('Please enter your birthday in DD-MM-YYYY format')
date = datetime.strptime(input_bday, "%d-%m-%Y").date()
print('your age is: ' + str(datetime.now().year - date.year) )