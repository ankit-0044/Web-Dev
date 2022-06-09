const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC CODE
app.use('/static',express.static('static'));        // for serving static files
app.use(express.urlencoded());

// PUG SPECIFIC CODE
app.set('view engine','pug');       // set the template engine as pug
app.set('views',path.join(__dirname,'views'));      // set the views directory

// ENDPOINTS
app.get('/',(req,res) =>{
    const con = 'Fill this form best of your knowledge';
    const params = {'title':'Addmission Form','content':con};
    res.status(200).render('index.pug',params);
});
app.post('/',(req,res) =>{
    console.log(req.body);
    name = req.body.name
    gender = req.body.gender
    age = req.body.age
    address = req.body.address
    more = req.body.more
    let output = `The name is ${name}, ${age} years old, ${gender},residing at ${address}. More about him/her ${more}`;
    fs.writeFileSync('output.txt',output);
    const params = {'message':"Your form has been submitted."};
    res.status(200).render('index.pug',params);
})
// START THE SERVER
app.listen(port,() =>{
    console.log(`The application started on port ${port}`);
});