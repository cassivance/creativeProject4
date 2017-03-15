var express = require('express')
var app = express()
var moment = require('moment');



app.get('/', function (req, res) {
  res.send(moment().format('MM/DD/YYYY'))
})
 
app.listen(3000)