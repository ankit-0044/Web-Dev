// setTimeout --> Allows us to run the function once after the interval of time
// clearTimeout --> Allows us to run the function repeatdly after the interval of time
console.log("setTimeout")
function greet(arg1,arg2){
    console.log("Hello "+arg1+" "+arg2);
};

timeOut = setTimeout(greet,5000,"Argument01","Argument02");
console.log(timeOut);

clearTimeout(timeOut);      // clearTimeOut will stop the executuion of setTimeout function

intervalId = setInterval(greet,2000,"Argument1","Argument2");
console.log(intervalId);
clearInterval(intervalId);      // clearInterval will stop the execution of setInterval function

function displayTime(){
    let time = new Date();      // create Date object time
    console.log(time);          // display time on console
    document.getElementById('time').innerHTML=time;     // set time object in the html body
}
setInterval(displayTime,3000);      // allows function to run repeatdly after 1 sec