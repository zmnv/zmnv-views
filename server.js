const express = require('express');
const app = express();
const opn = require('opn');
const chalk = require('chalk').default;
const { LayoutLine } = require('./src/js-helpers/consoleTools');

const address = require('./src/js-helpers/getMyAddress');

const ENV = require('./environment');
const { LogoServer } = require('./src/js-helpers/logo');

function StartServer(PORT = address.port) {
    const hostname = `http://${address.ip}:${PORT}`;
    console.log(LogoServer(hostname));

    app.use('/', express.static(ENV.currentPath + '/build')); // ← adjust

    app.listen(PORT, address.ip, function () {
        // console.log(chalk.gray('Закройте окно чтобы выключить сервер...'));
        
        setTimeout(() => {
            opn(hostname);
        }, 1000);
    });

}

module.exports = StartServer;
