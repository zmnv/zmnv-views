const chalk = require('chalk').default;
const PACKAGE = require('../../package.json');
const ENV = require('../../environment');

const LogoServer = (hostname = 'http://localhost:8080') => `
${chalk.cyanBright('    ▄▄▄  ▄▄██████▀    ')} ${chalk.cyanBright('ZMNV VIEWS STATIC SERVER')}
${chalk.cyanBright('   ▀▀██ ███████▀▀     ')} ${chalk.cyanBright(PACKAGE.version)}
${chalk.cyanBright('   ▄█▀ ███████▀       ')} ${chalk.gray('')}
${chalk.cyanBright('  ██▄▄███████████▄    ')} ${chalk.cyanBright(hostname)}
${chalk.cyanBright('  ▀█████████████▀     ')} ${chalk.greenBright('online')}
`;

const LogoStart = () => `
${chalk.magentaBright('    ▄▄▄  ▄▄██████▀  ')} ${chalk.magentaBright('ZMNV VIEWS BUILDER')}
${chalk.magentaBright('   ▀▀██ ███████▀▀   ')} ${chalk.magentaBright(PACKAGE.version)}
${chalk.magentaBright('   ▄█▀ ███████▀     ')} 
${chalk.magentaBright('  ██▄▄███████████▄  ')} ${chalk.gray('Сканирую директорию:')}
${chalk.magentaBright('  ▀█████████████▀   ')} ${chalk.greenBright(ENV.currentPath)}
`;

const LogoAfterAll = () => `
🏁 Завершено.
👉 Переместите содержимое папки ${chalk.bold('/build')} на сервер,
   либо создайте свой ${chalk.cyanBright.bold('zmnv-views serve')}\
`

module.exports = {
    LogoServer,
    LogoStart,
    LogoAfterAll
}
