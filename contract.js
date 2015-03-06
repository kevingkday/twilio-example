var express = require('express');
var fs = require('fs');
var app = express();
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

app.get('/', function(req, res) {
   
    var xhs = new XMLHttpRequest();
    xhs.open("GET", "https://api.ripple.com/v1/accounts/rDxMDiegComKQLiPoQ4hzS2kpUu4UxTWon/balances?currency=BTC", false);
    xhs.send();

    var balance = (xhs.responseText);

    var total = JSON.parse(balance);

    var totaloutput = total.balances[0].value;

    var xmlhttp;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "http://www.mobilikey.com/service/Sms.aspx", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("From=%2B16048385077&To=%2B16042103679&Body=" + totaloutput);
    

    res.status(200)
    .send({ success: true })

});

app.listen(process.env.PORT || 5000);
