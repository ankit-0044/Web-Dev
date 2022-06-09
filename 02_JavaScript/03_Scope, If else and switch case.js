// scope of variables
let a = "abc";       // variable with 'let' have only block scope we cannot specifiy same variable twice
console.log(a);

{
    let a = "cba";       // here the scope of variable 'a' is only in this block
    console.log(a);
}
console.log(a);

const b = 'abcd';        // const is constant means varible value cannot be changed
console.log(b);

// if else condition
let age = 2;

if (age > 18){
    console.log('You can Drink.')
}

else if(age == 2){
    console.log('You are just Child!')
}

else{
    console.log('You cannot Drink.')
}

// switch case
const cups = 44;
switch (cups) {
    case 43:
        console.log('The value of cup is 43')        
        break;
    case 44:
        console.log('The value of cup is 44')        
        break;
    case 45:
        console.log('The value of cup is 45')        
        break;
        
    default:
        console.log('The value of cup is wrong!')        
        break;
}