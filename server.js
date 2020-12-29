//Server using express
const express = require("express");
const http = require('http');

const app = express();

app.use(function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, this is a server using Express.js")
 });

 http.createServer(app).listen(3000);