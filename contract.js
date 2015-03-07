var express = require('express');
var fs = require('fs');
var app = express();
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;


app.get('/', function(req, res) {
   
    var xhr = new XMLHttpRequest();
    
   xhr.open('GET', 'http://www.w3schools.com/ajax/demo_get.asp', false);
   //xhr.open('GET', 'https://api.ripple.com/v1/accounts/rDxMDiegComKQLiPoQ4hzS2kpUu4UxTWon/balances?currency=BTC');
    xhr.send();

   var balance = (xhr.responseText);
  // var total = JSON.parse(balance);





    res.status(200)

    
 .send({ success: true, balance: balance })

});

app.listen(process.env.PORT || 5000);
