var twilio = require('../twilio-node/lib');
// Your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC140d1e9dd765e6d26b90dd90f7b38cf0';
var authToken = '7d2b0abc46997462364f8b2de6ecd001';
var client = require(twilio)(accountSid, authToken);
var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
    var indexHtml = fs.readFileSync('public_html/default.html');
    response.client.messages.create({
        body: "Jenny please?! I love you <3",
        to: "+16048385077",
        from: "+19177467475"}, function (err, message) {process.stdout.write(message.sid);
      
        response.end(indexHtml);
        })

});

server.listen(8000);
