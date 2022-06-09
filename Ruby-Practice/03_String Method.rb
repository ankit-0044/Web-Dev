# String Methods

# Get the string length

str = "String in Ruby"

len_01 = str.size 			# method (size)

puts len_01

len_02 = str.length			# method (length)

puts len_02

# Check if a String is empty

str = "Check String Empty" 		# non-empty string
str_empty = "" 					# empty string

check_01 = str.size == 0 		# checking using condition with size method
check_02 = str_empty.size == 0

puts check_01
puts check_02

check_03 = str.empty?			# checking using empty? method
check_04 = str_empty.empty?

puts check_03
puts check_04


# String interpolation :-  allows us to combine strings together

name = "Python" 				# string variable
age = '50' 						# age is also a string variable bcz we assigned '50' as string 

puts "He is #{name} and #{age} years old . Also we do this #{4 + 4}."

# Extract a Substring

str = "1234Abcd"

sub_str_01 = str[0,4]			

sub_str_02 = str[4, 7]

p sub_str_01
p sub_str_02

sub_str_03 = str[0..-1]
sub_str_04 = str[-4]

p sub_str_03
p sub_str_04

str[0..3] = "" 			# replacing string

p str

# Note :- in ruby we cannot do reverse slicing


# Find Out If a String Contains Another String

str = 'Today is Sunday'

puts str.include?('Sunday') 		# using method (include?()), return true or false

puts str.index('day') 				# using method (index()), return index value of first letter specified

puts str.index('Mon')				# will not return anything

# Pad a Ruby String

binary_str = '1101'

pad_left = binary_str.rjust(8,'0') 		# rjust() add padding to the left of the string

puts pad_left

pad_right = binary_str.ljust(8,"0")  	# ljust() add padding to the right of the string

puts pad_right

str = 'Sun'

padding = str.ljust(4,'ya')			# this will add only 'd' letter from "day" bcz padding only add single letter

puts padding

# Compare Strings Ignoring Case

lang1 = 'ruby'
lang2 = 'Ruby'

upstr = lang1.upcase 			# method(upcase), change string to all uppercase
upstr2 = lang2.downcase 		# method(downcase), change string to all downcase

puts upstr
puts upstr2

comparision1 = lang1.upcase == lang2.upcase			# first change the string to specified case then compare
comparision2 = lang1.downcase == lang2.downcase	

puts comparision1
puts comparision2

# Trim a String & Remove White Space

extra_spaced = "    Spaced    "

both_side = extra_spaced.strip 			# method(strip), remove both side spaces

puts both_side

left_side = extra_spaced.lstrip  		# method(lstrip), remove left side spaces

puts left_side

right_side = extra_spaced.rstrip 		# method(rstrip), remove right side spaces

puts right_side

# String Prefix & Suffix

str = "Ruby Programming"

str_start = str.start_with? "Ruby" 		# method(start_with?), check if the string start with specified string, return true or false
str_end = str.end_with? "Programming" 	# method(end_with?), check if the string end with specified string, return true or false

puts str_start
puts str_end

del_start = str.delete_prefix("Ruby") 	# method(delete_prefix()), delete the specifed prefix of the string and return left string
del_end = str.delete_suffix(" Programming") 	# method(delete_suffix()), delete the specifed suffix of the string and return left string

puts del_start
puts del_end

# Convert a String to An Array of Characters

str = 'abcd'
str2 = "a b c d"
str3 = "a,b,c,d"

split1 = str.split("")			# method(split), split the string with specified character (by default spaces), return array of characters
split2 = str2.split
split3 = str3.split(",")

p split1
p split2
p split3

# Convert an Array to a String

arr = ['a', 'b', 'c', 'd']

str_join1 = arr.join 		# method(join), join the string with specified object
str_join2 = arr.join(",")

p str_join1
p str_join2

# Convert a String Into An Integer

int_str = '1233'

int = int_str.to_i		# method(to_i), convert string into integer if only string consist of number

p int 

# Check If A String Is A Number

str1 = "1234"
str2 = "abcd123"

if_number1 = str1.match?(/\A-?\d+\Z/)
if_number2 = str2.match?(/\A-?\d+\Z/)

p if_number1
p if_number2

# NOTE : 
# From the start of the string 
# (\A) check if there is an optional dash 
# (-?, for negative numbers), 
# then make sure there are some numbers in there (\d+) 
# & nothing else until the end of the string (\Z).”


# Append Characters (string concatenation)

str = "" 			# empty string

p str 				# str before append

str << "Hello !" 	# method(<<), used to append the string
str << " "
str << "Ruby"

p str 				# str after append

# Iterate Over Characters Of a String in Ruby

str = "Programming"

str.each_char {|ch| p ch} 		# method(each_char{loop}), iterate over a string

arr_of_char = str.chars  		# method(chars), convert a string into array of characters

p arr_of_char

iterate = arr_of_char.each{|ch| p ch} 	# method(each{loop}), iterate over array of characters


# Replace Text Inside a String Using The Gsub Method

str = "We have many dogs"

replaced_str = str.gsub("dogs", "cats") 	# method(gsub("word","newword")), replaced the text inside the string

p replaced_str

str = "abccc"

replaced_str = str.gsub("c", "") 			# replacing "c" with empty

p replaced_str

str = "We have 5 dogs"

replaced_str = str.gsub(/\d+/, "4") 		# replacing number using regular expression

p replaced_str

str = "the lord of the rings"

replaced_str = str.gsub(/\w+/) {|word| word.capitalize} 	# replacing and capitalizing word 

p replaced_str

# NOTE : "gsub" merhod repalce all the matcheds in the string, there is also a "sub" method which replace only first match


# Remove the Last Character From a String

puts "Enter your Name: "

name = gets

p "Your name is #{name}" 		# we will get "\n" character at the end of the string

name = gets.chomp 				# method(chomp), remove the "\n" character at the end of the string

p "Your name is #{name}"


# Counting Characters

str = "Welcome to Ruby Programming"

count_chr = str.count("m")

p count_chr