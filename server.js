'use strict';

var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config();

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;


mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>{
    console.log("Connection Success!");
})
.catch((error)=>{
    console.log("Connection failed:  "+error);
});


app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/shorturl/new", function (req, res){
  res.json({"original_url":"www.google.com","short_url":1});
})

app.listen(port, function () {
  console.log('Node.js listening: '+port);
});

