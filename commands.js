#!/usr/bin/env node

const program = require('commander');
const PACKAGE = require('./package.json');

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
        Main();
    });

program
    .parse(process.argv);
