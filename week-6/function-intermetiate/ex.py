

def my_reduce(f, iterable, init):
    if len(iterable) == 0:
        return None
    if init is None:
        result = iterable[0]
    else:
        result = f(init, iterable[0])
    for i in range(1, len(iterable)):
        result = f(result, iterable[i])
    return result

arr = [1,2,3]

def my_sum(x,y):
    return x+y

print(my_reduce(my_sum, arr, 5))


def splice(start, delete_count = 0):
    
    


# remove 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 1);
assert nums == [2, 3]

# add 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 0, 0);
assert nums == [0, 1, 2, 3]

# add 2 elements
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 0, -1, 0);
assert nums == [-1, 0, 1, 2, 3]

# replace 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 1, 1, 55);
assert nums == [1, 55, 3]

# delete all elements from index to end
nums = [1, 2, 3, 4, 5]
nums, deleted = splice(nums, 1);
assert nums == [1]

# returns list of deleted elements as the second parameter
nums = [1, 2, 3]
nums, deleted = splice(nums, 1);
assert deleted == [2, 3]

# returns an list of the deleted element (1 element)
nums = [1, 2, 3]
nums, deleted = splice(nums,1, 1);
assert deleted == [2]

# returns an empty list when no elements are deleted
nums = [1, 2, 3]
nums, deleted = splice(nums,1, 0, 5);
assert deleted == []

# delete all but 2 last ones
nums = [1, 2, 3, 4]
nums, deleted = splice(nums, -2);
assert deleted == [3, 4] 
        