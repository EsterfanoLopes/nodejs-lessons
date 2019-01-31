const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the Middlewere');
    next(); // Allows the request to continue to the next middlewere in line
});
app.use((req, res, next) => {
    console.log('In another Middlewere');
    // ...
});
const server = http.createServer(app);

server.listen(3000);
