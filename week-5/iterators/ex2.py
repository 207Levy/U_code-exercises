import math


def my_accumulate(numbers):
    sum = 0
    for n in numbers:
        sum +=n
        yield sum
        
for elem in my_accumulate([1,2,3,4,5]):
  print(elem) 
  
  
  
##### EX3 #####

def get_prime_factors_generator(number):
    i = 2
    while i * i <= number:
        if number % i:
            i += 1
        else:
            number //= i
            yield i
    if number > 1:
        yield number



for x in get_prime_factors_generator(100):
  print(x) 
  
  
  
#### EX4 ####

class CircleIter:
    def __init__(self, lst, iter):
        self.max_iterations = iter
        self.items = lst
    def __iter__(self):
        self.step = 0
        return self
    def __next__(self):
        if self.step >= self.max_iterations:
            raise StopIteration
        self.step += 1
        return self.items[self.step % len(self.items)] 
    
    
    
for x in CircleIter([1,2],5):
  print(x, end=" ") 

for x in CircleIter([1,2,3],4):
  print(x, end=" ")
  for y in CircleIter([5,6],3):
    print(y, end=" ")
  print() 