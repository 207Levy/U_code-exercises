from functools import wraps
from random import random


def print_exec_count(func):

    @wraps(func)
    def count(*args, **kwargs):
        func(*args, **kwargs)
        count.c += 1
        print(count.c)
    count.c = 0
    return count


@print_exec_count
def random_number():
    return random()


for i in range(10):
    random_number()
