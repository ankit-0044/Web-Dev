console.log("Arrow Functions")

// simple function
function greet(){
    console.log("Hello!");
}
greet();

// simplifying above function using arrow function
let greet2 = () =>{
    console.log("Simplifyied using arrow function");
}
greet2();

// creating sum function using arrow function 
let sum = (a,b) =>{
    return a+b;
}
console.log(sum(20,40));

// simplifying above sum function more using arrow function
let sum2 = (a,b)=> a+b;
console.log(sum2(20,30));

// setTimeout arrow function

setTimeout(() => {
    console.log('Arrow setTimeout Function')
}, 2000);

// object with arrow function
let obj = {
    greeting:"Good Morning!",
    names:["Ankit1",'Ankit2',"Ankit3"],
    speak(){
        this.names.forEach((element) =>{
            console.log(this.greeting+ "  Kukdoo "+element);
        });
    }
}
obj.speak();