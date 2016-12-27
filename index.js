
const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
//declare constants

//app.engine('html', mustacheExpress());
//app.set('view engine', 'html');


app.set('view engine', 'pug')
app.set('views', './views')
app.locals.pretty = true //
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('Node app is running on port', PORT);
});
//call functions
//when pushing a project, module file ignored
//npm install will install dependencies
app.get('/', function(req, res) {
    res.render('index');
  });
