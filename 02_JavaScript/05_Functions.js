// Function

// Fuction initialization
function greet(name,greetText){
    console.log(greetText + " " + name);
    console.log(name+" is a good boy.");
};

let name1 = "Ankit";            //Variable of type string
let name2 = "Sagar";
let name3 = "Rajan";
let name4 = "Sunder";
let greetText = "Hello! Good Morning!";

// Function Call
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4,greetText);

// Add Fuction
function sum(num1=0,num2=0){
    let result = num1 + num2;
    return result;
};

let var1 = 12;
let var2 = 4;
let ret = sum(var1,var2);
console.log(ret);

//factorial using recursion
function fact(num){
    if (num==0){
        return 1;
    }
    else if(num < 0){
        return "Invalid Input"
    }
    else if(num > 0){
        return (num * fact(num-1));
    }
}

let facto = fact(5);
console.log(facto)