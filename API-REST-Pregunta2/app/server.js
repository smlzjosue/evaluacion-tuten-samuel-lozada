var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  console.log(req.body);
  var date = new Date();
  var current_hour = date.getHours();
  var minutes = date.getMinutes();
  var secondns = date.getSeconds();
  if (current_hour < 10) {
    current_hour = '0' + current_hour.toString();
  }
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }

  if (secondns < 10) {
    secondns = '0' + secondns.toString();
  }
  console.log('hora: ' + current_hour + ':' + minutes + ':' + secondns);
  var returnTime = current_hour + ':' + minutes + ':' + secondns;
  res.json({
    response: {
      time: returnTime,
      timezone: "utc"
    }
  });
});

app.post('/', function (req, res) {
  res.json({mensaje: 'Método post'})
}),

app.listen(port)
console.log('API escuchando en el puerto ' + port);
