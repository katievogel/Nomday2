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
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 100000 }));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/adduser', async (req, res) => {
    console.log('adduser received post');
    console.log(`adduser request.body: ${JSON.stringify(req.body)}`);
    try {
        let result = await db.Users.findOrCreate({ where: {username: req.body.username }, defaults: {user_email: req.body.email, pass_word: req.body.pass_word}});
        let [userRecord, wasCreated] = result;
        console.log(userRecord);
        console.log(wasCreated);
        if (wasCreated === true){
            res.send(JSON.stringify(result));
            console.log("User successfully created")
        } else if (wasCreated === false) {
            res.status(500)
            res.send("Username is already in use.")
        }
    }
    catch (err) {
        res.send('adduser error');
    }
});

app.post('/addlunchvisit', async (req, res) => {
    console.log('add lunch visit received a post');
    try {
        let result = await db.Ratings.create({
            place_rank: req.body.place_rank,
            visit_date: req.body.visit_date,
            fave_item: req.body.fave_item,
            comments: req.body.comments
        });
        let result2 = await db.Restaurants.findOrCreate({ 
            where: { place_name: req.body.place_name}, 
            defaults: {
                place_website: req.body.place_website, 
                place_last_visit_date: req.body.visit_date, 
                place_rank: req.body.place_rank
            }
        })
        console.log("result: " + JSON.stringify(result))
        console.log("result: " + JSON.stringify(result2))
        res.send()
    }
    catch(err) {
        console.log(err)
        res.status(500);
        res.send('add entry error')
    }
})

app.get('/userlogin', async (req, res) => {
    console.log('userlogin');
    console.log(`request.body: ${JSON.stringify(req.query)}`);
    try {
        let result = await db.Users.findOne({where: {username: req.query.username, pass_word: req.query.password}});
        if (result !== null) {
            res.send(JSON.stringify(result));
        } else {
            res.status(401);
            res.send("User does not exist")
        }
    }
    catch (e) {
        res.send(err);
    }
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
