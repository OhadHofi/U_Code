def get_arr():
    return [1,1,1,1,1]


def test_get_arr_size():
    assert len(get_arr()) == 5


def test_get_arr_all_ones():
    for number in get_arr():
        if not number == 1:
            assert False
    assert True


def test_get_arr_first_plase_zero():
    assert get_arr()[0] == 0