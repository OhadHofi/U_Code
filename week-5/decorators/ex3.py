from time import sleep

#3:
def slow_down(some_func):
    def wrapper(*args, **kwargs):
        sleep(1)
        res = some_func(*args, **kwargs)
        return res
    return wrapper   
  

@slow_down
def sum_many(number):
    sum = 0
    for i in range(0,number + 1):
        sum += i
    return sum


sum1 = sum_many(1)
print(sum1)



