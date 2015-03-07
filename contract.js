var express = require('express');
var fs = require('fs');
var app = express();
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;


app.get('/', function(req, res) {
   
    var xhr = new XMLHttpRequest();
    
   
   xhr.open('GET', 'https://api.ripple.com/v1/accounts/rDxMDiegComKQLiPoQ4hzS2kpUu4UxTWon/balances?currency=BTC', false);
    xhr.send();

   var balance = (xhr.responseText);
 //  var balance = '{ "success": true, "ledger": 12106156, "validated": true, "balances": [ { "value": "0.00718421768538286", "currency": "BTC", "counterparty": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q" } ] }'
   
  // var total = JSON.parse(balance);





    res.status(200)

    
 .send({ success: true, balance: balance })

});

app.listen(process.env.PORT || 5000);
