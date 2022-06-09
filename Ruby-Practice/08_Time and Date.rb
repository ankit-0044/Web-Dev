# Use Ruby Time & Date Classes

t = Time.now 				# represents the current time

puts t

t = Time.new(2022,3,13) 	# give the starting date in numbers

puts t

t = Time.at(15000) 			# create a Time object using an Unix timestamp

puts t

# check day,month and hour from time object

t = Time.now

p t.day					# get date
p t.month				# get month(number)
p t.year 				# get year
p t.hour 				# get hour
p t.min  				# get minutes
p t.sec  				# get seconds

# check if today is the day?

p t.monday?  			# check if today is the monday return true or false
p t.tuesday?
p t.wednesday?

# Time Zones

t = Time.now

p t.zone  				# check time zone

p t.utc_offset / 3600  	# time zone offset, the output for this method is in seconds, but we can divide by 3600 to get it in hours.

t = Time.now.utc  		# current time in UTC

p t

# Time Formatting

time = Time.new

p time.strftime("%d/%m/%Y")  	# %d=date, %m=month, %Y=year

p time.strftime("%k:%M")  		# %k=hour(0..23), %M=minutes

p time.strftime("%I:%M %p") 	# %I=hour(1..12), %M=minute, %p=AM/PM

p time.strftime("Today is %A") 	# %A=Day of the week(name)

p time.strftime("%d of %B, %Y") # %B=Month(name)

p time.strftime("Unix time is %s") # %s=seconds since 1970