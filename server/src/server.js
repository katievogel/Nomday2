var express = require('express');

var PORT = process.env.PORT || 3000;

var app = express();

console.log('starting server')
app.listen(PORT, function () {
    console.log(`server started on ${PORT}`);
});

