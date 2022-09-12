from decimal import DivisionByZero


def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')    
    except DivisionByZero as e:
        print(e)
    except TypeError as e:
        print(e)
    except MemoryError as e:
        print(e)

