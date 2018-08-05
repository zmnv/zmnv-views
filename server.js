var express = require('express');
var app = express();
var ip = require('ip');

const port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/build')); // ← adjust

app.listen(port, ip.address(), function() { 
    console.log(`Listening http://${ip.address()}:${port}`); 
});