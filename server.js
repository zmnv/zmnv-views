const express = require('express');
const app = express();
const opn = require('opn');
const address = require('./src/js-helpers/getMyAddress');

app.use('/', express.static(__dirname + '/build')); // ← adjust

app.listen(address.port, address.ip, function() { 
    console.log(`\x1b[90m
┌─────────────────────────────────────────────┐
│ \x1b[95mRunning Server \x1b[90m* \x1b[94mhttp://${address.ip}:${address.port}\x1b[90m  │
└─────────────────────────────────────────────┘
Press CTRL+C to exit...
    \x1b[0m`);
    opn(`http://${address.ip}:${address.port}`);
});
