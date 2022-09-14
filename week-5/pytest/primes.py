from math import sqrt

class Primes:

    @staticmethod
    def is_prime(number):
        prime_flag = True
        if number > 1:
            max_range = int(sqrt(number)) + 2
            for i in range(2, max_range):
                if number % i == 0:
                    prime_flag = False
                    break
            return prime_flag
        else:
            return False
    
    @staticmethod 
    def are_prime_numbers(*args):
        if not all(isinstance(arg_type, int) for arg_type in args):
            return False
        
        return all(Primes.is_prime(number) for number in args)


print(Primes.is_prime(3))