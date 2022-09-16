from ast import And


my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8,9,10]]

def test_number():
  assert 3 in my_list and 56 in my_list

  
def test_str():
    assert 'I' in my_list and 'Love' in my_list and 'Python' in my_list


def test_upper_str():
    for val in my_list:
        if type(val) == str and not val.isupper():
            assert False
    assert True



def test_negative():
  assert 6 not in my_list



