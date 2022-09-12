def get_list_element(my_list, index):
  try:
    print(my_list[index]) 
  except Exception as e:
    print(e)

get_list_element([1,2,3,4], 4)