# variables

a = 10			# initializing variable a
b = 23.5		# initializing variable b

puts a + b 		# add the value of a and b and print on the screen

p a * b 		# multiply a and b

print b - a 	# subtract b to a
puts			# new line

# String Variables

str = "Hello ! This is a String"		# str is a string variable bcz string assigned to it

# Printing string 
puts str

# String size

puts str.size						# .size is a method to check the size of string	

# String Interpolation

name = 'Ruby'				# string assigned to a variable name "name"
dob = 1995					# integer assigned to a variable name "dob"

puts "This is #{name} born in #{dob}."		# Here, "#{any_object}" will replaced with specified object name

# string Conversion

num_str = "12345"

p num_str		# Before conversion

num = num_str.to_i			# "to_i" is used to convert string to integer

p num 			# After Conversion
