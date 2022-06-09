// DOM

// Accessing HTML element by ID
let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav);

// Accessing HTML element by Class
let container = document.getElementsByClassName('container');
console.log(container);

// Accessing HTML element by css Selector
let sel = document.querySelector('#nav');
console.log(sel);

// Accessing HTML element by css selector
let sele = document.querySelector('#nav>li');
console.log(sele);

// Accessing HTML element by css selector
let selall = document.querySelectorAll('#nav>li');
console.log(selall);