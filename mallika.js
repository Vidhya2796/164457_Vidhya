var http = require("http");
var express = require('express');
var fs=require('fs');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
 /* var server = app.listen(4567, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
}); 
  */
 
app.get('/form', function (req, res) {

  var data = fs.readFileSync('display.html', 'utf8');
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(data);

});
 
app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Your name is " + req.body.name;
  res.send(reply);
 });
 app.listen(4567);