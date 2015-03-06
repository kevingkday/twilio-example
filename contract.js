var express = require('express');
var fs = require('fs');
var app = express();


app.get('/', function(req, res) {
   
var xhr = new XMLHTTPRequest();

    res.status(200)
    .send({ success: true })

});

app.listen(process.env.PORT || 5000);
