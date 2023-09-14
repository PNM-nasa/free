var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
  res.sendFile(`${__dirname}/index.html`/*,{ root:__dirname}*/); 
})
app.get('/:file', function(req, res){
  res.sendFile(`${__dirname}/`+req.params.file);
});

app.listen(3000);
