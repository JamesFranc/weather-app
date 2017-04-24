var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3001);

//Handler function is passed a request and response objects
app.get('/',function(req,res){
    //end the request when handling is complete
    res.send('One day this will query the DarkSky API');
    res.end();
});

app.listen(3001, function () {
  console.log('DarkSky API server is listening on port 3001!')
})