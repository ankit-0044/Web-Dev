// creating a simple server

const http = require('http');
const fs = require('fs');
// reading file content
const filecontent = fs.readFileSync("../HTML/01_index.html");

// creating a server which serve file content
const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type': 'text/html'});
    res.end(filecontent);
});

// server listen port
server.listen(80,'127.0.0.1',() => {
    console.log('Listening on port 80');
});