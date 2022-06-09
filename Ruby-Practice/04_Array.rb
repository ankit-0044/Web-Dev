# Using Array

arr = [1,2,3,4,5] 		# initializing array

p arr 					# print arr 

p arr[0]  				# accessing array element using index
p arr[1]
p arr[2]
p arr[3]
p arr[4]
p arr[5]  				# out of index will give nil

# array Size

arr_size = arr.size

p arr_size

arr_size = arr.length

p arr_size

# adding elements to array

arr = []

p arr

arr << 1 		# method(<<), append the element in the arr
arr << 2
arr << 3
arr << 1

p arr