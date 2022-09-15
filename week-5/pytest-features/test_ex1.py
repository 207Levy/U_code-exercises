import pytest


def fibonacci_by_index(index):
   if index == 1:
       return 0
   elif index == 2:
       return 1
   else:
       return fibonacci_by_index(index-1) + fibonacci_by_index(index-2) 
   
   
@pytest.mark.parametrize("index, result", [(1,0), (2,1), (3,1), (4,2),(13,144)])
def test_fibonacci(index, result):
    assert fibonacci_by_index(index) == result