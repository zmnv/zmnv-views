#!/usr/bin/env node

const program = require('commander');
const clear = require('clear');
const PACKAGE = require('./package.json');
const StartServer = require('./server');

const CheckUpdates = require('./src/applications/check-update');
const ENV = require('./environment');
const Main = require('./app');

const { LogoStart, LogoServer, LogoAfterAll } = require('./src/js-helpers/logo');

const askUserInputString = require('./src/js-helpers/askUserInputString');

program
    .version(PACKAGE.version, '-v, --version')
    .option('-t, --title [text]', 'Add title into resentation page header')
    .option('-p, --port [8080]', 'Set custom static server port')
    .option('-d, --deploy [folderName]', 'Deploy files into path by process.env.ZMNV_VIEWS_DEPLOY')
    // .option('-l, --lang [ru_RU]', 'Set language of this command line interface. Values: ru_RU, en_US.')
    .parse(process.argv);

program
    .command('version')
    .description('Show version with logo.')
    .alias('v')
    .action(() => {
        CheckUpdates();
        console.log('version', PACKAGE.version);
    });


let lang = '';
program
    .command('build')
    .description('Build simple gallery')
    .alias('b')
    .action(() => {
        clear();
        console.log(LogoStart());

        askUserInputString('  Введите название папки: ').then(answer => {
            const slug = answer || 'noslug';
            const deployEnvPath = `${process.env.ZMNV_VIEWS_DEPLOY}/${process.env.ZMNV_VIEWS_USERPATH}`;
            const deployPath = (typeof program.deploy === 'string') ? program.deploy : deployEnvPath;
            const deploy = deployPath && `${deployPath}/${slug}`;

            if(answer) console.log(`  > Создана папка: ${deployPath && deployPath}/${answer}\n`);

            Main(program.title, program.deploy && deploy);
            console.log(LogoAfterAll());

            CheckUpdates();
        })

    });

program
    .command('serve')
    .description('Serve build')
    .alias('s')
    .action(() => {
        clear();

        StartServer(program.port);
        // CheckUpdates();
    });

program
    .parse(process.argv);
