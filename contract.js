//document.write("Hello, Rodrigo");


//var xhr = new XMLHttpRequest();
//xhr.open("GET", "https://api.ripple.com/v1/wallet/new", false);
//xhr.send();

//document.write(xhr.response);
//document.write(xhr.responseText);



//var demo = (xhr.responseText);

//var json = JSON.parse(demo);

//var output = json.wallet.address;
//document.write(output);


var xhs = new XMLHttpRequest();
xhs.open("GET", "https://api.ripple.com/v1/accounts/rDxMDiegComKQLiPoQ4hzS2kpUu4UxTWon/balances?currency=BTC", false);
xhs.send();

//document.write(xhr.response);
//document.write(xhr.responseText);

//document.write(xhs.responseText);

var balance = (xhs.responseText);
//document.write(balance);
var total = JSON.parse(balance);

var totaloutput = total.balances[0].value;

var xmlhttp;

xmlhttp = new XMLHttpRequest();

//xmlhttp.onreadystatechange=function()
//{
xmlhttp.open("POST", "http://localhost:57399/mobilikey/service/Sms.aspx", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("From=%2B16048385077&To=%2B16042103679&Body="+totaloutput);
    document.write(totaloutput);
//}


    server.listen(8000);
