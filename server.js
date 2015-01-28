var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a complete Ninja now.');
});

app.get('/nickname', function(request, response){
    response.send('smiling-wombat');

    
});

app.listen(
    process.env.PORT || 4000,
    process.env.IP||'local host'
    );