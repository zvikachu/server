/**
 * Created by zvi on 8/8/2016.
 */
var express = require('express');
var app = express();
var requestIp = require('request-ip');

const PORT = 9000;
app.set('port', process.env.PORT || PORT);
app.get('/' ,function (req,res) {
    var clientIp = requestIp.getClientIp(req);
    res.send('zvi\'s server\nWhere all good things start.' + "\nYour ip: +" + clientIp);
});
app.listen(app.get('port'),function(){
   console.log('server started on port '+ app.get('port'));
});

