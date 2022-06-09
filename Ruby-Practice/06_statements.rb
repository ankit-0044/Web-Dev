# Make Decisions

# using if

stock = 10 

if stock > 1 						# if condition true then if body statement will excute otherwise not 
	p "Sorry We are out of stocks"
end

# Unless Statement

var = 123
var2 = 321

unless var == var2  				# if condition of unless is false then body of unless statement will execute otherwise not
	p 'Not Equal'
end

# if else Statement

if stock < 1
	p "Sorry we are out of stocks"

else  								# else statement execute when if condition become false
	p "Thanks for your order !"
end

# elsif statement

if stock < 1
	p "Sorry we are out of stocks"

elsif stock ==10					# eslif also like if statement, used when we have many condition to work with
	p "You got an offer !"

else 
	p "Thanks for your order !"
end

# Use Multiple Conditions

# and operator
name = 'david'
city = 'chicago'

if name == 'david' and city == 'chicago' # operator(and/&&), if both condition true statement will execute 
	p 'You are correct !'
end

if name == 'david' && city == 'Fb'
	p 'You are correct !'
else 
	p 'You are Wrong !'
end

# or operator 

if name =='david' or city =='fb' 		# operator(or/||), if any one of the condition is true statement will execute
	p "You are half right !"
end

if name =='raj' || city =='fb'
	p "You are half right !"
else
	p "Your are Wrong !"
end


# If Construct in One Line

p "Yes! Even number" if 2.even?			# if statement shorthand 

 # ternary operator:

 ternary = 40 > 100 ? "Greater" : "Smaller" 	# if else statement shorthand, here ":" colon is ternary operator

 p ternary