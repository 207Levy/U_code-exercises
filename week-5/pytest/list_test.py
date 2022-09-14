import string


my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8, 9, 10]]

print(3 in my_list, 56 in my_list)


def test_number():
    assert (3 in my_list) == False, 'number 3 is not in my_list'
    assert (56 in my_list) == True, 'number 56 is in my_list'
    
def test_str():
  assert all(string in my_list for string in ["I", "Love", "Coding"]) # Should assert if "I", "Love" and "Coding" are in my_list

def test_upper_str():
  assert all(string.isupper() for string in my_list if isinstance(string, str)) == False # Should assert if all the strings in my_list are in upper case﻿

def test_negative():
  assert  (6 not in my_list) == True # Should assert if number 6 is no﻿t in﻿ my_list - result should be true
