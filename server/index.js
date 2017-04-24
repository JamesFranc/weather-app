var express = require('express');
var request = require('request');
var app = express();
var key = 'c21743171e1a42f4b37309dbef454a59';
app.set('port', process.env.PORT || 3001);

//Handler function is passed a request and response objects
app.get('/',function(req,res){
    //end the request when handling is complete

    // res.send('One day this will query the DarkSky API');
    request('https://api.darksky.net/forecast/'+key+'/33.0731,-96.8217', function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        // console.log('body:', body);
        res.send(body);
    });
    // res.end();
});

app.listen(3001, function () {
  console.log('DarkSky API server is listening on port 3001!')
})