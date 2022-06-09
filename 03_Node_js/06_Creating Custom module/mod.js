console.log('This is module.js');

// defining average function
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
};
// exporting average function as a module as it is
// module.exports = average;

// exporting modules as an object
module.exports = {
    avg:average,
    name:'Ankit',
    repo:"Github"
};

// exporting module as a key value
module.exports.key = "Value";