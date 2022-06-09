// Loops

// simple for loop
let i = 0;
for(i=1;i<=5;i++){
    console.log(i);
};

// iterate array using for
let friends = ['A','B','C','D','E'];
for (let index = 0; index < friends.length; index++) {
    console.log("Hello Friend "+friends[index]);
    
};

// foreach loop
friends.forEach(function f(element){
    console.log("Using Foreach Loop "+element)
});

// for of loop
for ( elements of friends) {
    console.log("Using For of Loop "+elements);
};

// for in loop
let employee = {
    name:'Ankit',
    salary:20000000,
    job:'Cyber Security Professional'
};
for (key in employee){
    console.log(`The ${key} of employee is '${employee[key]}'`);
};

// while loop
let j = 0;
while(j<5){
    console.log(`${j} is less than 5`)
    j++
};

// do while loop
k = 3;
do{
    console.log(`${k} is less than 4 but we inside do while loop`);
    k++;
}while(k<6);
