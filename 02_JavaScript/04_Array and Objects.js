// object type data
let employee = {
    name:"JavaScript",
    age:25,
    nickname:"Livescript"
}

console.log(employee)
console.log(employee.name)
console.log(employee['age'])
console.log(employee['nickname'])


// Array

let arr = [1,2,3.5,'Javascript',undefined]
console.log(arr)
console.log(arr[2])     // accessing element of an array using index
console.log(arr[4])

let arr1 = new Array(4,1,2,3.5,'Javascript',undefined)    // creating array using Array() method
console.log(arr1)
console.log(arr1.length)        // length of an array
console.log(arr1.sort())        // sort array in ascending order

arr1.push("Add at the end")     // 'push' add the element in the array at the end
console.log(arr1)
