// adding required modules
const http = require('http');
const fs = require('fs');

// reading html files
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const services = fs.readFileSync('services.html');
const contact = fs.readFileSync('contact.html');

// defining hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// creating server
const server = http.createServer((req,res) => {
    console.log(req.url);       // print the requested url
    url = req.url;              // url object 
    res.statusCode = 200;       // defining statuscode
    res.setHeader('content-type','text/html');      // defining file content
    // conditional statements 
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

// creating listen port for server
server.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});