var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/test');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendfile(__dirname + 'index.html');
});

app.use('/lecturas', require('./routes/reports'));

app.listen(3000);
console.log("listening at localhost:3000");
