var express = require('express');
var fs = require('fs');
var app = express();
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;


app.get('/', function(req, res) {
   
    var xhr = new XMLHttpRequest();
    
   
   xhr.open('GET', 'http://ip.jsontest.com/', false);
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();

   var balance = (xhr.responseText);
      res.status(200)
 .send({ success: true, balance: balance })
   
 //  var balance = '{ "success": true, "ledger": 12106156, "validated": true, "balances": [ { "value": "0.00718421768538286", "currency": "BTC", "counterparty": "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q" } ] }'
   
  // var total = JSON.parse(balance);
//var xmlhttp;
//xmlhttp = new XMLHttpRequest();

 //  xmlhttp.open("POST","http://www.mobilikey.com/service/Sms.aspx",true);
//   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 //  xmlhttp.send("From=%2B16048385077&To=%2B16042103679&Body=blahblah");



 

});

app.listen(process.env.PORT || 5000);
