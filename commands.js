#!/usr/bin/env node

const program = require('commander');
const clear = require('clear');
const PACKAGE = require('./package.json');
const StartServer = require('./server');

const CheckUpdates = require('./src/applications/check-update');
// const ENV = require('./environment');
const Main = require('./app');

const { LogoStart, LogoAfterAll } = require('./src/js-helpers/logo');
const askUserInputString = require('./src/js-helpers/askUserInputString');
const { transliterate } = require('./src/js-helpers/transliterate');

const ncp = require("copy-paste");
const opn = require('opn');
const fs = require('fs');

program
    .version(PACKAGE.version, '-v, --version')
    .option('-t, --title [text]', 'Add title into gallery page header')
    .option('-p, --port [8080]', 'Set custom static server port')
    .option('-d, --deploy [path]', 'Deploy files into path. process.env.ZMNV_VIEWS_DEPLOY')
    .option('-o, --open', 'Open deployed gallery in browser')
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

function checkDeployPath(deploy) {
    if ((typeof deploy === 'boolean' && deploy) && !fs.existsSync(process.env.ZMNV_VIEWS_DEPLOY)) {
        console.log(`Не могу достучаться до сервера [${process.env.ZMNV_VIEWS_DEPLOY}]\nПроверьте его доступность и попробуйте еще раз...\n`);
        process.exit();
    }
}

program
    .command('build')
    .description('Build simple gallery')
    .alias('b')
    .action(() => {
        clear();
        console.log(LogoStart());

        if(program.deploy) checkDeployPath(program.deploy);

        if(program.deploy) askUserInputString('Введите название: ').then(answer => {
            const slug = transliterate(answer).toLowerCase() || '_trash';
            const deployEnvPath = program.deploy && `${process.env.ZMNV_VIEWS_DEPLOY}${process.env.ZMNV_VIEWS_USERPATH}`;
            const deployPath = (typeof program.deploy === 'string') ? program.deploy : deployEnvPath;
            const deploy = deployPath && `${deployPath}/${slug}`;

            console.log(`\n📁 Создана папка:\n${deployPath && deployPath}/${slug}\n`);

            Main(program.title || program.deploy && answer, program.deploy && deploy);

            const url = `${process.env.ZMNV_VIEWS_HOSTNAME}${process.env.ZMNV_VIEWS_USERPATH}/${slug}`;
            console.log(`\n🎆 Галерея опубликована:\n${url}\n...ссылка скопирована в буфер обмена.`);
            console.log('');

            ncp.copy(url);

            setTimeout(() => {
                if(program.open) opn(url);
                process.exit();
            }, 1000);
        });
        else {
            console.log(`\n📁 Создана папка: /build`);
            program.title && console.log(`✍🏻  Заголовок:     ${program.title}`);
            console.log('');
            Main(program.title);
            console.log(LogoAfterAll());
        }

        CheckUpdates();

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
