from cmath import tan
import math


def get_regular_polugon_area(num_of_sides, length_of_size):
    return (num_of_sides * (length_of_size ** 2)) / (4 * math.tan(math.pi / num_of_sides))


print(math.floor(-5.3))
print(math.ceil(16.8))
print(get_regular_polugon_area(15, 2.5))