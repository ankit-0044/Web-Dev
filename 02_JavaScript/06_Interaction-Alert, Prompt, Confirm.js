// Alert in in-browser
// alert() function
alert("This is a alert message!");       // alert method take string as a argument

// Prompt() function
let name = prompt("Enter Your Name!","Guest");   // takes 2 argument 1st is message and 2nd is defalult value for that message
console.log(name);

// confirm() function
let reply = confirm("Do you want to delete this...?");      // confirm return True and false
if(reply){
    console.log("Successfully deleted!");
}
else{
    console.log("Not Deleted!")
}