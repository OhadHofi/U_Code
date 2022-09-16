import pytest
from operator import add


def store():
    items = ("apple", "banana", "orange")
    amount = (2, 2, 1)
    return dict(zip(items, amount)) 



def buy_banana(store):
    store["banana"] += 1
    

def buy_two_bananas(store):
    buy_banana(store)
    buy_banana(store)
    


def test_buy_banana():
    check_store = store()
    old_num_of_bananas = check_store["banana"]
    buy_banana(check_store)
    assert check_store["banana"] == old_num_of_bananas + 2 , "You got error with your banana"


def test_buy_two_bananas():
    check_store = store()
    old_num_of_bananas = check_store["banana"]
    buy_two_bananas(check_store)
    assert check_store["banana"] == old_num_of_bananas + 2 , "You got error with your bananas"



