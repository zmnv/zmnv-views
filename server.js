const express = require('express');
const app = express();
const opn = require('opn');
const chalk = require('chalk').default;
const {LayoutLine} = require('./src/js-helpers/consoleTools');

const address = require('./src/js-helpers/getMyAddress');
const hostname = `http://${address.ip}:${address.port}`;

const ENV = require('./environment');

function StartServer() {

app.use('/', express.static(ENV.currentPath + '/build')); // ← adjust

app.listen(address.port, address.ip, function() { 
    console.log(`\x1b[90m
${chalk.gray('┌──────────────────────────────────────────────┐')}
${chalk.gray('│')} ${chalk.magentaBright('Running Server')} ${chalk.gray('*')} ${LayoutLine(hostname, 27, undefined, chalk.cyanBright)} ${chalk.gray('│')}
${chalk.gray('└──────────────────────────────────────────────┘')}
Press CTRL+C to exit...
    \x1b[0m`);
    opn(`http://${address.ip}:${address.port}`);
});

}

module.exports = StartServer;
