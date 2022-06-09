console.log("Working with JSON")

let jsonobj = {
    name:'Ankit',
    channel:'Python',
    friend:'Python Program'
}
console.log(jsonobj);

// stringify jsonobj using JSON
let myjsonstr = JSON.stringify(jsonobj);
console.log(myjsonstr);

myjsonstr = myjsonstr.replace('Ankit', 'Ankit singh');
console.log(myjsonstr);

// changing myjsonobj back to jsonobj (string back to object)
newjsonobj = JSON.parse(myjsonstr);
console.log(newjsonobj);