import math


#ex1:
def my_enumerate(iterable, start = 0):
    for i in iterable:
        yield start ,i
        start += 1


for index, elem in my_enumerate([10, 20, 30, 40]):
    print(index, elem) 

for index, elem in my_enumerate([10, 20, 30, 40], 10):
    print(index, elem)  


#2:
def my_accumulate(iterable):
    sum = 0
    for i in iterable:
        sum += i
        yield sum
    

for elem in my_accumulate([1,2,3,4,5]):
    print(elem) 


#3:
def get_prime_factors_generator(num):
    while num % 2 == 0:  
        yield 2  
        num = num / 2  
  
    for i in range(3, int(math.sqrt(num)) + 1, 2):  
        while num % i == 0:  
            yield i  
            num = num / i  
    if num > 2:  
        yield num  


for x in get_prime_factors_generator(100):
    print(x) 



#4:
class CircleIter:
    def __init__(self, iter, number):
        self.iter = iter
        self.number = number
        self.index = 0

    def __iter__(self):
        return self
    
    def __next__(self):
        res = self.iter[self.index]
        self.index += 1
        self.index = self.index % len(self.iter)
        self.number -= 1
        if self.number < 0:
            raise StopIteration
        return res

    
for x in CircleIter([1,2],5):
  print(x, end=" ") 

for x in CircleIter([1,2,3],4):
    print(x, end=" ")
    for y in CircleIter([5,6],3):
        print(y, end=" ")
print() 
