#!/usr/bin/env node

const program = require('commander');
const clear = require('clear');
const PACKAGE = require('./package.json');
const StartServer = require('./server');

// const AdauruLogo = require('./tools/ad-logo');
const ENV = require('./environment');
const Main = require('./app');

program
    .version(PACKAGE.version, '-v, --version');

program
    .command('version')
    .description('Show version with logo.')
    .alias('v')
    .action(() => {
        console.log('version', ENV.currentPath);
    });

program
    .command('test')
    .description('Test programm')
    .alias('t')
    .action(() => {
        clear();
        Main();
    });

program
    .command('serve')
    .description('Serve programm')
    .alias('s')
    .action(() => {
        clear();
        StartServer();
    });

program
    .parse(process.argv);
