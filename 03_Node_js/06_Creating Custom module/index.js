// adding average function from mod module
// const average = require('./mod');
// console.log(average([3,4]));

// adding mod module
const mod = require('./mod');
console.log(mod.avg([1,2,3,4,5,6,7]));      // calling avg function from module
console.log(mod.name);
console.log(mod.repo);
console.log(mod.key);
console.log("This is index.js");