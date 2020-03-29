//Simplest express 
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var PORT = 3000;

var app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb', parameterLimit: 100000 }));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/adduser', (req, res) => {
    console.log('adduser received post');
    console.log(`adduser request.body: ${JSON.stringify(req.body)}`);
    // Add record to database
    // username, email address, password
    // unique user-id
    res.send('adduser');
});

app.post('/get-all-users', (req, res) => {
    res.send('hello world');
});

console.log('starting server')
app.listen(PORT, function () {
    console.log(`server started on ${PORT}`);
});
//end simplest express
