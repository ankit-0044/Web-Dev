// simple use of module in Nodejs
// using readFileSync and writeFileSync module

const fs = require('fs');
let text = fs.readFileSync('Read.txt','utf-8');     // readFileSync read text from the file 
text = text.replace('chrome','Brave');
console.log("The Content of the file is:");
console.log(text);

console.log('Creating a new file...');
fs.writeFileSync('Read1.txt',text);                 // writeFileSync write the text in the file
