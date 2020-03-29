//Simplest express 
var express = require('express');

var PORT = 3000;

var app = express();
app.get('/', function (req, res) {
    res.send('hello world');
});

console.log('starting server')
app.listen(PORT, function () {
    console.log(`server started on ${PORT}`);
});
//end simplest express
