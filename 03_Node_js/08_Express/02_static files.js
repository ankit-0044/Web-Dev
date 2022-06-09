const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// for serving static files
app.use('/static',express.static('static'));

// set the template engine as pug
app.set('view engine','pug');

// set the views directory(folder)
app.set('views',path.join(__dirname,'views'));

// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Python', message: 'Hello there! Thanks for pug template.' })
  })

app.get('/',(req,res) =>{
    res.send("This is home page of express app.");
});

app.listen(port,() =>{
    console.log(`The application started on port ${port}`);
});