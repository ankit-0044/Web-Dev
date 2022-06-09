console.log("Math objects")

// Available math function in javascript
let math_fun = Math;
console.log(math_fun);

// some constant value in math object
console.log("The value of Math.E is",Math.E);
console.log("The value of Math.PI is",Math.PI);
console.log("The value of Math.LN2 is",Math.LN2);
console.log("The value of Math.SQRT1_2 is",Math.SQRT1_2);

// Functions from Math Object
a = 56.7987
console.log("The round value of a is:",Math.round(a));

console.log("3 raised to power of 2 is:",Math.pow(3,2));
console.log("5 raised to power of 3 is:",Math.pow(5,3));

console.log(`Square root of 36 is: ${Math.sqrt(36)}`);
console.log(`Square root of 50 is: ${Math.sqrt(50)}`);

// ceil and floor
console.log(`5.8 rounded up to nearest integer is: ${Math.ceil(5.8)}`);
console.log(`5.8 rounded down to nearest integer is: ${Math.floor(5.8)}`);

// absolute function
console.log(`Absolute value of 5.66 is: ${Math.abs(5.66)}`);
console.log(`Absolute value of -5.66 is: ${Math.abs(-5.66)}`);

// Trignometric Functions
console.log(`The value of sin(pi) is: ${Math.sin(Math.PI/2)}`);
console.log(`The value of cos(pi) is: ${Math.cos(Math.PI/2)}`);

// Min and Max functions
console.log(`Minimum value of 4,5,6,7 is: ${Math.min(4,5,6,7)}`);
console.log(`Maximum value of 4,5,6,7 is: ${Math.max(4,5,6,7)}`);

// Gererating a random number
console.log(`The random number is: ${(50,60)*Math.random()}`);