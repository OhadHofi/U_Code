def get_squares_dictionary(num):
    return {x : x**2 for x in range(1,num+1)}

print(get_squares_dictionary(5))