# EX1

import re


my_tuple = 1,"1",True, [1], {1:"1"}, (1), b'1', float(3.5),

#EX2

print(my_tuple[3], my_tuple[-4])


#EX3

days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

days = days[:2] + days[3:]

print(days)


#EX4


numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

reversed = numbers[::-1]

print(reversed)


#EX5

print("ex5")
tpl = (2,4,6,8,10,12) 

print(tpl[:0:-1])

print(tpl[::-1][1:])