//req.params/query/param/body
const express=require('express');
var app=express();
app.get('/year/' ,(req,res)=>{
   // var age=req.params.age;-->app.get('/year/:age'------> /year/22
   var age=req.query.age;//-->/year?age=22
    var year=new Date().getFullYear()-age;
    res.send("your born year is "+year);
}).listen(3005);