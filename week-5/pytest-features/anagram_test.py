import pytest

def anagram(str1, str2):
    if(sorted(str1)== sorted(str2)):
        return True
    else:
        return False
    
@pytest.mark.parametrize("str1, str2", [("act", "cat"), ("elbow", "below"), ("cat", "caat")])    
def test_anagram(str1, str2):
    assert anagram(str1,str2) == True