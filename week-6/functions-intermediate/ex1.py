#Reduce:
RETIRE = 70

def reduce(function, iterable, initial = None):
    if type(initial) == float:
        return function(iterable, initial)
    else:
        return function(iterable)

def multiplyList(myList, initial = 1):
 
    # Multiply elements one by one
    result = 1
    for x in myList:
        result = result * x
    return result * initial

list = [1, 2, 3, 4, 5]

print(reduce(sum, list))
print(reduce(multiplyList, list, 1))



#Max Arguments
def max_arguments(*args):
    max_arg = 0

    def inner(*args):
        nonlocal max_arg
        max_arg = max(max_arg, len(args))
        return max_arg

    return inner

func = max_arguments()
print(func())           # 0
print(func(1,2,3,7))    # 4
print(func(9,2))        # 4
print(func(1,2,3,4,5))  # 5 



#Increase
def generate_functions_that_increase_key_wuth_some_val_or_by_defoult_1(key, increase  = 1):
    def inner(obj):
        nonlocal key
        nonlocal increase

        obj[key] += increase if obj.get(key) != None else obj
        return obj
    
    return inner


employee = {
  "name": "Momo",
  "age": 61,
  "salary": 10000
} 

increase_age = generate_functions_that_increase_key_wuth_some_val_or_by_defoult_1("age")
increase_salary = generate_functions_that_increase_key_wuth_some_val_or_by_defoult_1("salary", 1000)

how_many_years_work = 0
for i in range(employee["age"], RETIRE):
    how_many_years_work +=1
    increase_age(employee)
    if how_many_years_work % 2 == 0:
        increase_salary(employee)
    print(employee)