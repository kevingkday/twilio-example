var express = require('express');
var fs = require('fs');
var app = express();
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

app.get('/', function(req, res) {
   
    var xhr = new XMLHttpRequest();
    xhs.open("GET", "https://api.ripple.com/v1/accounts/rDxMDiegComKQLiPoQ4hzS2kpUu4UxTWon/balances?currency=BTC", false);
    

    res.status(200)
    .send({ success: true })

});

app.listen(process.env.PORT || 5000);
