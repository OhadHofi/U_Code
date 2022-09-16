def is_prime(number):
    if number > 1:
        for i in range(2,number):
            if (number % i) == 0:
                return False
            else:
                return True
    else:
        return False


def are_prime_numbers(*args):
    for number in args:
        if not is_prime(number):
            return False
    return True