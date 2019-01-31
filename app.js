const http = require('http');

// Creating function aside
// function reListener(req, res) {
// }

// Using Anonymous function
// http.createServer(function(req, res){

// });

// Anonymous function short tag
// Keeps looping and listening requests
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();

    // Writing and sending back the Response
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);