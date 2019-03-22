const express = require('express');
const app = express();
const opn = require('opn');
const chalk = require('chalk').default;

const address = require('./src/js-helpers/getMyAddress');
const ENV = require('./environment');
const { LogoServer } = require('./src/js-helpers/logo');
const { dictionary } = require('./src/js-helpers/polyglot');

function StartServer(PORT = address.port, autoOpen = true) {
    const hostname = `http://${address.ip}:${PORT}`;
    console.log(LogoServer(hostname));

    app.use('/', express.static(ENV.currentPath + '/build')); // ← adjust

    app.listen(PORT, address.ip, function () {
        console.log(chalk.gray(dictionary.SERVER_CLOSE_HINT[ENV.locale]));

        setTimeout(() => {
            if(autoOpen) opn(hostname);
        }, 1000);

        process.stdin.resume();
    });
}

module.exports = StartServer;