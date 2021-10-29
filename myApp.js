require('dotenv').config();


var bodyParser = require('bodyparser')

var express = require('express');
var app = express();
/*
app.get("/", function(req, res){
    res.send("Hello Express");
});
*/

//body-parser to Parse POST Requests - configuration
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//root-level request logger 
app.use(function middleware(req, res, next){
    var myStr=req.method+" "+req.path+" - "+req.ip;
    console.log(myStr);
});

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

//serve JSON with current time - chain middleware
app.get("/now", function(req, res, next){
    req.time=new Date().toString();
    next();
},  (req, res)=>{
    res.json({time: req.time});
});

//echo server
app.get("/:word/echo", (req, res)=>{
    var param1=req.params.word;
    res.json({echo: param1});
});

//get query parameter input from the client 
app.get("/name", (req, res)=>{
    var {first: firstName, last: lastName}=req.query;
    res.json({name: `${firstName} ${lastName}`});
});

//body-parser to Parse POST Requests
app.post("/name", (req, res)=>{
    var {first: firstName, last: lastName}=req.body;
    res.json({name: `$firstName $lastName`});
});


 module.exports = app;
