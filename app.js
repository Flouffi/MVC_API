let express = require('express');
let app = express();
var path = require("path");

const dev_db_url= 'mongodb+srv://<pseudo>:<mdp>@cluster0-ggjhj.mongodb.net/test?retryWrites=true&w=majority'
let bodyParser = require('body-parser');
const mongoose = require('mongoose');


let planete = require('./routes/planete.route');

const mongoDB= process.env.MONGOSB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise= global.Promise;
const db= mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

//Config BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use("/planete", planete);   
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/css"));


app.listen(9090);