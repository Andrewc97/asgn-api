let express = require('express')
let app = express();
const apiRouter = require("./asgn-router.js");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

// Employ Body-Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Set up Mongoose Connection
mongoose.connect("mongodb://localhost/asgn", { useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting to the database!");
} else {
    console.log("Database connected successfully!");
}

var port = 8080;

app.use("/asgn-api", apiRouter);

app.get('/', (req, res) => res.send('Youre Running Express!! Welcome'));

app.listen(port, function () {
  
    console.log(`Running asgn-api on port ${port}`);
});