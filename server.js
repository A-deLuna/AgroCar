var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendfile(__dirname + 'index.html');
});


app.listen(3000);
console.log("listening at localhost:3000");
