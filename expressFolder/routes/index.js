var express = require('express')
var router = express.Router();
var moment = require('moment');



router.get('/', function (req, res) {
   console.log('In the get route');
	res.sendFile('index.html', { root:  'public' });
});

router.get('/yourEvent', function(req, res){
    let date = req.query.q;
    console.log(date);
    //var date = '19940829';
    res.send(moment(date, "YYYYMMDD").fromNow());
});
 
//app.listen(3000)
module.exports = router;



