var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
	res.send('Hello!');
});

app.get('/summarize', function (req, res) {
  var text = req.query.text;
  text = encodeURIComponent(text);
  var url = 'http://127.0.0.1:8080/summarize?sent_limit=3&text='+text;
  request(url, function(error, response, body) {
    if (error) return console.log(error);
	  res.send(body);
  });
});

app.listen(process.env.PORT || 3000);
