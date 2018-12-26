//importing http express fs and bodyparser modules in ur file

// Running Server Details.
/*  var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
}); 
 */


/*   var html='';
  html +="<body>";
  html += "<form action='/thank'  method='post' name='form1'>";
  html += "Name:</p><input type= 'text' name='name'>";

  html += "Email:</p><input type='text' name='email'>";
  html += "address:</p><input type='text' name='address'>";
  html += "Mobile number:</p><input type='text' name='mobilno'>";
html += "<input type='submit' value='sayHello'>";
 html += "<INPUT type='reset'  value='reset'>"; 
  html += "</form>";
  html += "</body>";
  
  res.send(html);
 */
/* app.listen(3004); */
var http = require("http");
var express = require('express');
var fs = require('fs');
var app = express();//create an object for express and store that express object inside app variable
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 

app.get('/home', (req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var data = fs.readFile('hello.html', 'utf8');
  res.end(data);
});
  
    //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html');

 
app.post('/welcome', urlencodedParser, (req, res)=>{
  var reply='';
  reply += "Hello " + req.body.name;
  res.send(reply);
})
app.listen(3000);
  /* reply += "Your E-mail id is" + req.body.email; 
  reply += "Your address is" + req.body.address;
  reply += "Your mobile number is" + req.body.mobilno; */
 