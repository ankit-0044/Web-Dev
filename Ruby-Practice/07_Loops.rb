# Each loop 

# each loop on array 
puts "Each loop"

number = [1,2,3,4,5] 			# integer array

number.each {|num| p num}  	# each reserved word, "{|num| p num}" each block, "num" is variable 

# each loop on hash

hash_var = {'key1'=> 1234, 'key2'=>2345} 	# hash key-value pair data

hash_var.each {|key,value| p "#{key} value is #{value}"} 	# using each loop, variable "key","value" store the value of hash on each iteration

hash_var2 = {'Ankit':5000, Sameer:3000}

hash_var2.each{|name,fee| p "#{name} fees is #{fee}"}



# Each With Index
puts "Each with index"

animals = ['Sunder','Milan','Sameer']

animals.each_with_index{|animal, indx| p "Animal #{animal} at index #{indx}"} 	# each_with_index iterate over an object while having current index of the element




# Times Loop
puts "Times Loop"

5.times{puts 'Hello'} 		# times reserved word,"{puts "string"}" times block, it'll print 5 times hello

5.times{|indx| puts "Hello #{indx}"} 		# "indx" is a variable that becomes the current value for each iteration




# Range Looping
puts "Range Looping"

(1..5).each{|num| puts num} 	# each loop on range function "(1..5)", this will print number 1 to 5




# While Loop
puts "While Loop"

n = 0

while n <= 5 		# while loop runs until the condition become false
	puts n
	n += 1
end



# Until Loop
puts "Until Loop"

bottle = 0

until bottle == 5 	# until loop runs until the condition become true
	puts bottle
	bottle += 1
end



# Skipping Iterations With The Next Keyword
puts "Next Keyword"

10.times do |i|
	next unless i.odd?  	# next skip the iteration when condition true
	puts "Hello #{i}"
end

puts 'select Keyword'

puts (1..10).select(&:even?) 	# select skip the iteration when condition false



# Stop A Loop Early

puts "Break keyword"

numbers = [1,2,4,9,12]

numbers.each do |n|
  break if n > 10 			# break stop the loop if condition is true

  puts n
end



# Upto Method
puts 'upto method'

1.upto(5) { |i| puts i }