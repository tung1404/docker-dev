var express = require('express');
var app = express();
var mongoose = require('mongoose');

//DB setup
mongoose.connect('mongodb://mongo:27017');

// http://stackoverflow.com/a/38522044
app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function(){
 console.log('Example app listening on port 3000!');
});