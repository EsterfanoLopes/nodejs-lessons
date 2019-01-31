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
    console.log(req);
    // process.exit();
});

server.listen(3000);