var express = require('express');
var fs = require('fs');
var app = express();
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

app.get('/', function(req, res) {
   
    var xhs = new XMLHttpRequest();
   

    res.status(200)
    .send({ success: true })

});

app.listen(process.env.PORT || 5000);
