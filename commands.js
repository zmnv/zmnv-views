#!/usr/bin/env node

const program = require('commander');
const clear = require('clear');
const PACKAGE = require('./package.json');
const StartServer = require('./server');

const CheckUpdates = require('./src/applications/check-update');
const ENV = require('./environment');
const Main = require('./app');

program
    .version(PACKAGE.version, '-v, --version');

program
    .command('version')
    .description('Show version with logo.')
    .alias('v')
    .action(() => {
        CheckUpdates();
        console.log('version', PACKAGE.version);
    });

program
    .command('build')
    .description('Build simple gallery')
    .alias('b')
    .action(() => {
        clear();
        CheckUpdates();
        // process.env.LAYOUT = 'CHECKS';
        Main();
    });

program
    .command('serve')
    .description('Serve build')
    .alias('s')
    .action(() => {
        clear();
        CheckUpdates();
        StartServer();
    });

program
    .parse(process.argv);
