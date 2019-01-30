const http = require('http');

// Creating function aside
// function reListener(req, res) {
// }

// Using Anonymous function
// http.createServer(function(req, res){

// });

// Anonymous function short tag
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);