// importing express module
const express = require('express');

// initializing express module
const app = express();
const port = 80;        // port

// send get response
app.get('/',(req,res) => {
    res.send("This is homepage of express app.")
});

app.get('/about',(req,res) => {
    res.send("This is about page of express app.")
});

// post response
app.post('/about',(req,res) => {
    res.send("This is post request of about page of express app.")
});

// get response with status code
app.get('/this',(req,res) => {
    res.status(404).send("This is page not found.")
});

// defining listen port
app.listen(port,() =>{
    console.log(`The application started on port ${port}`)
});