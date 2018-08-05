var express = require('express');
var app = express();
var ip = require('ip');

const port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/build')); // ← adjust

app.listen(port, ip.address(), function() { 
    console.log(`\x1b[90m
┌─────────────────────────────────────────────┐
│  \x1b[95mRunning Server \x1b[90m* \x1b[94mhttp://${ip.address()}:${port}\x1b[90m  │
└─────────────────────────────────────────────┘
    \x1b[0m`);
});
