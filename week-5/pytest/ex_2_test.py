from cgi import test
from primes import Primes

def test_is_three_prime():
    print(Primes.is_prime(3))
    assert Primes.is_prime(3) == True

def test_is_567_prime():
    assert Primes.are_prime_numbers(5,6,7) == False, 'Should be false'
    
def test_one():
    assert Primes.is_prime(0) == False, '0 IS NOT PRIME!'
    assert Primes.is_prime(-1) == False, '0 IS NOT PRIME!'
    

    