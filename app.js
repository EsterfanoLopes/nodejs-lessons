const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the Middlewere');
    next(); // Allows the request to continue to the next middlewere in line
});
app.use((req, res, next) => {
    console.log('In another Middlewere');
    res.send('<h1>Hello from Express</h1>');
});
const server = http.createServer(app);

app.listen(3000);
