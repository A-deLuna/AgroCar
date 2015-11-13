var express = require('express');
var app = express();
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/test');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + 'index.html');
});

app.use('/reports', require('./routes/reports'));

app.listen(3000);
console.log("listening at localhost:3000");
