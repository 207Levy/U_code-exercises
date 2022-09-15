
from functools import wraps


def cache_saver(func):
    @wraps(func)
    def check_for_dup(*args, **kwargs):
        if check_for_dup.results.get(f'{args} {kwargs}') is not None:
            return check_for_dup.results.get(f'{args} {kwargs}')
        else:
            result = func(*args, **kwargs)
            check_for_dup.results[(f'{args} {kwargs}')] = result
            print(check_for_dup.results)
            return result
    check_for_dup.results = {}
    return check_for_dup
    



def fibonacci(num):
  print("calculating: ", num) 
  
  
@cache_saver
def add(x, *, addition=0, more=0):
  print("running  add")
  return x + 1 + addition + more 


res = []
add(1, addition=0, more=0)
add(1, more=0, addition=0)
add(1, more=0)
add(1)
