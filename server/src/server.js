//Simplest express 
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require("./models");
var cookieParser = require("cookie-parser");

var PORT = 3000;

var app = express();
//CORS is a security feature
app.use(cors());
//bodyParser captures the body of the request that was entered. JSON.stringify makes it JSON, otherwise you get Object Object
app.use(bodyParser.json({ limit: '50mb', parameterLimit: 100000 }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 100000 }));

app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// app.get('/', (req, res) => {
    
// });

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
    console.log("place rank: " + JSON.stringify(req.body.place_rank))
    try {
        let [restaurant_result, is_created] = await db.Restaurants.findOrCreate({ 
            where: { place_name: req.body.place_name}, 
            defaults: {
                place_website: req.body.place_website, 
                place_last_visit_date: req.body.visit_date, 
                place_rank: req.body.place_rank
            }
        })
        let rating_result = await db.Ratings.create({
            restID: restaurant_result.restID,
            place_rank: req.body.place_rank,
            visit_date: req.body.visit_date,
            fave_item: req.body.fave_item,
            comments: req.body.comments
        });

        console.log("result: " + JSON.stringify(rating_result))
        console.log("result2: " + JSON.stringify(restaurant_result))
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
            res.cookie("user", result.username);
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

init();
