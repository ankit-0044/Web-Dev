// importing mongoose
var mongoose = require('mongoose');

// creating connection to the mongodb
mongoose.connect('mongodb://localhost/ankit',{useNewUrlParser: true, useUnifiedTopology:true});

// checking connection
var db = mongoose.connection;
db.on('erroe', console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log("We are connected...");
});

// creating schema
var kittySchema = new mongoose.Schema({
    name: String    // "Format"
});

// creating method(function)
kittySchema.methods.speak = function () {
    var greeting = "My name is " + this.name
    console.log(greeting);
};

// compiling our schema into a Model
// Model: A model is a class with which we construct documents.
var Kitten = mongoose.model('Kitten', kittySchema);

// constructing document
var ankitmongo = new Kitten({ name: 'Ankit singh' });
var ankitmongo2 = new Kitten({ name: 'Ram'});

console.log(ankitmongo.name); 
console.log(ankitmongo2.name);
ankitmongo.speak();         // 'calling speak method which we created above'

// Saving document in the database
ankitmongo.save(function (err, ankitmongo){
    if (err) return console.log(err);
});

ankitmongo2.save(function (err, k){
    if (err) return console.log(err);
});

// Find method to view the document 
Kitten.find({name:'Ankit singh'}, function (err,kittens){
    if(err) return console.error(err);
    console.log(kittens);
});