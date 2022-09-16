#2
def get_list_element(my_list, index):
    try:
        print(my_list[index]) 
    except IndexError:
        print("index out of range")


#3
try:
    age = int(input("How old are you? ")) 
except ValueError:
    print("shuld be an integer")


#4
def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')
    except ZeroDivisionError as e:
        print(e)
    except TypeError as e:
        print(e)
    except ValueError as e:
        print(e) 
