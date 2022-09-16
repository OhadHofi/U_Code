import primes


def test_is_three_prime():
    assert primes.is_prime(3) == True


def test_five_six_seven():
    assert primes.are_prime_numbers([5, 6, 7]) == False


def test_one():
    assert primes.is_prime(1) == False