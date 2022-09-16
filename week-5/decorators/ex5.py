from time import sleep

#5:
def cache_decorator(some_func):
    def wrapper(*args, **kwargs):
        if wrapper.cache.get(tuple(args)):
            res = wrapper.cache.get(tuple(args))
        else:
            res = some_func(*args, **kwargs)
            wrapper.cache[tuple(args)] = res
            sleep(2)
        return res

    wrapper.cache = {}
    return wrapper   


@cache_decorator
def fibonacci_of(n):
    if n in {0, 1}:  # Base case
        return n
    return fibonacci_of(n - 1) + fibonacci_of(n - 2)  # Recursive case


print(fibonacci_of(7))
print(fibonacci_of(7))
print(fibonacci_of(8))
print(fibonacci_of(7))
print(fibonacci_of(7))
print(fibonacci_of(8))
print(fibonacci_of(8))
print(fibonacci_of(8))

