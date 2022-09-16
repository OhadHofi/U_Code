from functools import wraps

#2
def func_Information(some_func):
    @wraps(some_func)
    def wrapper(*args, **kwargs):
        print("func name: " + some_func.__name__)
        print("args: " + str(tuple(args)))
        print("kwargs: " + str(kwargs))
        res = some_func(*args, **kwargs)
        print("return value: " + str(res))
        print("return type: " + str(type(res)))
        return res
    return wrapper

@func_Information
def add(num1, num2, age, text):
    return num1 + num2

add(1, 2, age=3, text="hello") 