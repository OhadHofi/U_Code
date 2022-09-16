import pytest

def fibonacci_of(n):
    if n in {0, 1}:  # Base case
        return n
    return fibonacci_of(n - 1) + fibonacci_of(n - 2)



@pytest.mark.parametrize("n, fibonacci_sum", [(7, 13) , (2,556)])
def test_sum(n, fibonacci_sum):
    assert fibonacci_of(n) == fibonacci_sum


