require('dotenv').config();

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

//serve JSON on a specific route
app.get("/hi", (req, res)=>{
    res.json({"message":"Hello json"});
});

//use .env file
app.get("/json", (req, res)=>{
    process.env.MESSAGE_STYLE==="uppercase"?
    res.json({"message": "HELLO JSON"});
    res.json({"message": "Hello json"});
});































 module.exports = app;
