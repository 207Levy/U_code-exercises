from functools import wraps
from time import sleep


def slow_id_by_sec(func):
    @wraps(func)
    def slow(*args, **kwargs):
        sleep(2)
        func(*args, **kwargs)
    return slow


@slow_id_by_sec
def print_function_config(func):
    @wraps(func)
    def show_config(*args, **kwargs):
        print(f'func name: {func.__name__}')
        print(f'args: {args}')
        print(f'kwargs: {kwargs}')
        res = func(*args, **kwargs)
        print(f'returned value: {res}')
        print(f'returned value: {type(res)}')
    return show_config



@print_function_config
def add(*args, **kwargs):
    return sum(args)
        
add(1, 2, age=3, text="hello")