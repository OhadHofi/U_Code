import pytest

# function to check if two strings are
# anagram or not
def is_anagram(s1, s2):
	
	# the sorted strings are checked
    if(sorted(s1)== sorted(s2)):
        return True
    else:
        return False


@pytest.mark.parametrize("str1, str2", [("elbow", "below"), ("below", "elbow"), ("act", "cat"), ("meteor", "remote"), ("d", "f")]) 
def test_is_anagram(str1, str2):   
    assert is_anagram(str1, str2), "Got error in is_anagram!" 



