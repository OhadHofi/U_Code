#1:
tuples = (1, "sd", 3.14, "ohad", True, 42, False, "good")

#2:
print(tuples[4])
print(tuples[-4])

#3:
days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
res = days[:2] + days[3:7]
print(res)

#4:
def Reverse(tuples):
    new_tup = tuples[::-1]
    return new_tup

numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(Reverse(numbers))

#5:
def reversedTupleMinusFirstElement(tuple):
    return tuple[:0:-1]

print(reversedTupleMinusFirstElement((1,2,3,4,5)))
