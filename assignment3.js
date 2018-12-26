const express=require('express');
var app=express();
app.get('/home',(req,res)=>{
    res.send('hiii');
}).listen(process.argv[2])