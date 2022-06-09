const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser')
var mongoose = require('mongoose');

// creating connection to the mongodb
mongoose.connect('mongodb://localhost/contactSCD',{useNewUrlParser: true, useUnifiedTopology:true});

// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,    // "Format"
    phone: String,
    email: String,
    address: String,
    desc: String
});
var Contact = mongoose.model('Contact', contactSchema);

const app = express();
const port = 8080;

// EXPRESS SPECIFIC CODE
app.use('/static',express.static('static'));        // for serving static files
app.use(express.urlencoded());

// PUG SPECIFIC CODE
app.set('view engine','pug');       // set the template engine as pug
app.set('views',path.join(__dirname,'views'));      // set the views directory

// ENDPOINTS
// Home Page
app.get('/',(req,res) =>{
    const params = {};
    res.status(200).render('home.pug',params);
});
// Contact Page
app.get('/contact',(req,res) =>{
    const params = {};
    res.status(200).render('contact.pug',params);
});
// post request from contact form
app.post('/contact',(req,res) =>{
   var myData = new Contact(req.body);
   myData.save().then(() =>{
       res.send("This item has been saved to the databses")
   }).catch(() =>{
       res.status(400).send('Item was not saved to the database')
   });
    // res.status(200).render('contact.pug');
});

// START THE SERVER
app.listen(port,() =>{
    console.log(`The application started on port ${port}`);
});