//Simplest express 
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require("./models");

var PORT = 3000;

var app = express();
//CORS is a security feature
app.use(cors());
//bodyParser captures the body of the request that was entered. JSON.stringify makes it JSON, otherwise you get Object Object
app.use(bodyParser.json({ limit: '50mb', parameterLimit: 100000 }));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/adduser', (req, res) => {
    console.log('adduser received post');
    console.log(`adduser request.body: ${JSON.stringify(req.body)}`);
    db.Users.findOrCreate({ where: {username: req.body.username }, defaults: {user_email: req.body.email, pass_word: req.body.pass_word}});
    res.send('adduser');
});

app.post('/get-all-users', (req, res) => {
    res.send('hello world');
});

let init = async () => {
    console.log('sequelize sync');
    await db.sequelize.sync();
    console.log('starting server');
    app.listen(PORT, function () {
        console.log(`server started on ${PORT}`);
    });
}
//end simplest express

init();
