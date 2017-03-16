var express = require('express')
var app = express()
var moment = require('moment');



app.get('/', function (req, res) {
   res.sendFile('index.html', { root:  'public' });
});

app.get('/yourEvent', function(req, res){
    let month = document.getElementById("month");
    console.log(month);
    var date = '19940829';
    res.send(moment(date, "YYYYMMDD").fromNow());
})
 
app.listen(3000)




