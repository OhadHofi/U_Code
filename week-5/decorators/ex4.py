from time import sleep

#3:
def counter_invoke_function(some_func):
    def wrapper(*args, **kwargs):
        res = some_func(*args, **kwargs)
        print(wrapper.counter)
        wrapper.counter += 1
        return res
    wrapper.counter = 0
    return wrapper   
  

@counter_invoke_function
def sum_many(number):
    sum = 0
    for i in range(0,number):
        sum += i
    return sum


@counter_invoke_function
def sum_many_2(number):
    sum = 0
    for i in range(0,number):
        sum += i
    return sum


sum1 = sum_many(1)
sum1 = sum_many(1)
sum1 = sum_many_2(1)
sum1 = sum_many(1)
sum1 = sum_many(1)
sum1 = sum_many_2(1)
sum1 = sum_many(1)
sum1 = sum_many_2(1)
sum1 = sum_many(1)



