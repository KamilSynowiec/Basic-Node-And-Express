var express = require('express');
var app = express();
/*
app.get("/", function(req, res){
    res.send("Hello Express");
});
*/

//serve an html file
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});

//serve static assets (css, scripts, images)
app.use("/public", express.static(__dirname+"/public"));


































 module.exports = app;
