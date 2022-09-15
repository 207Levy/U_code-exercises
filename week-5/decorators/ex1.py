import time
from functools import wraps

def print_function_duration(func):
    @wraps(func)
    def timer(*args, **kwargs):
        start_time = time.time()
        func(*args, **kwargs)
        duration = time.time() - start_time
        print(f"function runtimw: ", duration) 
    return timer



@print_function_duration
def sum_many(rng):
    sum = 0
    for i in range(1,rng+1):
        sum+= i
    return sum
    


sum_many(1000)
