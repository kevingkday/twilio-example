var express = require('express');
var fs = require('fs');
var XHR = require('XHR');
var app = express();

app.get('/', function(req, res) {
 res.status(200)
// .send({ success: true })

 var xhr = new XHR();
 xhr.open("GET", "https://api.ripple.com/v1/accounts/rDxMDiegComKQLiPoQ4hzS2kpUu4UxTWon/balances?currency=BTC", false);
 xhr.send();
 
// .send({ success: true })

});

app.listen(process.env.PORT || 5000);
