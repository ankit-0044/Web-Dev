// Strings 
var str1 = "Java"       //double quote string
var str2 = "script"
var str3 = 'The programming language is'        // single quote string
console.log(str3 + str1 + str2)                 // concatnating strings

var str4 = `'${str1+str2}' is a "good" programming language.`   // back tip (``) string
console.log(str4)

// Length of the string

var len = str1.length           // .length is used to get the length of an object
console.log(`Length of the string is ${len}`)

// Escape Sequence
// '\n' = newline character
// "\t" = tab character
console.log("Hello! World\nWelcome to Javascript")
console.log("Hello! World\tWelcome to Javascript")

// Creating a string using string() method

var str = new String("This is String")
console.log(str)

// first occurence of a substring
str = 'This is a string'

var position = str.indexOf('is')
console.log(position)

// Last occurence of a substring
var position = str.lastIndexOf('is')
console.log(position)

// Substring from a String

var substr1 = str.slice(1,7)  // .slice can also take negative integer value
console.log(substr1)

var substr2 = str.substring(1,7)
console.log(substr2)

var substr3 = str.substr(1,5)
console.log(substr3)

console.log(str[1])

// replacing a string

var replaced = str.replace('string','Javascript')
console.log(str)        // old string
console.log(replaced)   // replaced string

// changing the case of string

console.log(str.toUpperCase())  // change to uppercase
console.log(str.toLowerCase())  // change to lowercase

// concat() method 
var newString = str.concat(" in javascript.")
console.log(newString)

var whitespacesstr = '    this is     whitespaces   '
console.log(whitespacesstr)
console.log(whitespacesstr.trim())      // remove the whitespaces from at start and at end

// charAt() and charCodeAt() method

var char = str.charAt(2)        // return the character at position 2
console.log(char)

var code = str.charCodeAt(2)    // return the character code
console.log(code)