var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + 'index.html');
})
app.listen(3000);
console.log("listening at localhost:3000");
