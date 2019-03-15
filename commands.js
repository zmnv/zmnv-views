#!/usr/bin/env node

const program = require('commander');
const clear = require('clear');
const PACKAGE = require('./package.json');
const StartServer = require('./server');

const CheckUpdates = require('./src/applications/check-update');
const ENV = require('./environment');
const Main = require('./app');

const { LogoStart, LogoServer } = require('./src/js-helpers/logo');

program
    .version(PACKAGE.version, '-v, --version')
    .option('-t, --title [text]', 'Add title into resentation page header')
    .option('-p, --port [8080]', 'Set custom static server port')
    .parse(process.argv);

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
        console.log(LogoStart());
        Main(program.title);
        console.log('after main?');
        CheckUpdates();
    });

program
    .command('serve')
    .description('Serve build')
    .alias('s')
    .action(() => {
        clear();

        StartServer(program.port);
        CheckUpdates();
    });

program
    .parse(process.argv);
