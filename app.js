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
    const url = req.url;
    if (url === '/') {
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write("<body><form action='/message' method='post'><input type='text'/><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        // return the anonymous function, without continue the code
        return res.end();
    }

    // Writing and sending back the Response
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);