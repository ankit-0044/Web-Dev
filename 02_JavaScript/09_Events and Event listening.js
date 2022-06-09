// Events

// click
// contextmenu
// mouseover/mouseout
// mousedown/mouseup
// mousemove

// Submit
// focus

// DOMContentloaded

// transitionend

// Event for toggle the para text
console.log("Onclick Event")
function toggleHide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display != 'none'){
        para.style.display = 'none';
    }
    else{
        para.style.display = 'block';
    }
}

// mouseover and mouseout event
let para = document.getElementById('para');
para.addEventListener('mouseover',function run(){
    console.log('Mouse Inside')
})
para.addEventListener('mouseout',function run(){
    console.log('Mouse Outside')
})
