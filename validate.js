
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/login', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})

app.post('/welcome',urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name=='vidhya',
      last_name:req.body.last_name=='shree'
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(1234, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})