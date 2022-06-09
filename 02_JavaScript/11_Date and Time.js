console.log('Date and Time')

// current date object creation
let currentDateTime = new Date();
console.log(currentDateTime);

// creating reference time object
let referenceTime = new Date(0);
console.log(referenceTime);

// creating custom time object
let newDate = new Date('2084-04-08');
console.log(newDate);

// creating specific Date Time object
// let newDateTime = new Date(yeat,month,date,hour,minutes,seconds,milliseconds);
let newDateTime = new Date(4444,4,4,5,4,04,44);
console.log(newDateTime);

// Date and Time usefull Functions
let yr = newDate.getFullYear();
console.log("The Year is:",yr);

let  dt = newDate.getDate();
console.log("The date is:",dt);

let month = newDate.getMonth();
console.log("The month is:",month);

let hr = newDate.getHours();
console.log("The hours is:",hr);

// setDate function
newDate.setDate(34);        // date 34 will auto correct by javascript
console.log(newDate);

// seconds till from reference time
let timestmp = Date.now()
console.log(timestmp)

setInterval(updateTime,1000);
function updateTime(){
    time.innerHTML = new Date();
}