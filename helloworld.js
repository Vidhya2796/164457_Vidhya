var express = require('express');// import Express module in our file, we have access to it through the variable Express
var app = express();

app.get('/', function(req, res){
   res.send("Hello from express framework!");
});

app.listen(3000);