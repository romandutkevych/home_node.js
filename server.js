var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var groupsControllers = require("./controllers/groups");
var interestsControllers = require('./controllers/interests');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('Hello API');
});

app.get('/groups', groupsControllers.all);

app.get('/groups/:id',groupsControllers.findById);

app.post('/groups', groupsControllers.create);

app.put('/groups/:id', groupsControllers.change);

app.delete('/groups/:id', groupsControllers.delete);

app.get('/interests', interestsControllers.all);

app.get('/interests/:id',interestsControllers.findById);

app.post('/interests', interestsControllers.create);

app.put('/interests/:id', interestsControllers.change);

app.delete('/interests/:id', interestsControllers.delete);


db.connect('mongodb://localhost:27017/myapi', function (err) {
    if(err){
        return console.log(err)
    }
    app.listen(3000, function () {
    console.log('API app started');
    });
})