const chalk = require('chalk').default;
const PACKAGE = require('../../package.json');
const ENV = require('../../environment');
const { dictionary } = require('./polyglot');

const LogoServer = (hostname = 'http://localhost:8080') => `
${chalk.blueBright('    ▄▄▄  ▄▄██████▀    ')} ${chalk.blueBright('ZMNV VIEWS STATIC SERVER')}
${chalk.blueBright('   ▀▀██ ███████▀▀     ')} ${chalk.blueBright(PACKAGE.version)}
${chalk.blueBright('   ▄█▀ ███████▀       ')} ${chalk.gray('')}
${chalk.blueBright('  ██▄▄███████████▄    ')} ${chalk.cyanBright(hostname)}
${chalk.blueBright('  ▀█████████████▀     ')} ${chalk.greenBright('online')}
`;

const LogoStart = () => `
${chalk.magentaBright('    ▄▄▄  ▄▄██████▀  ')} ${chalk.magentaBright('ZMNV VIEWS BUILDER')}
${chalk.magentaBright('   ▀▀██ ███████▀▀   ')} ${chalk.magentaBright(PACKAGE.version)}
${chalk.magentaBright('   ▄█▀ ███████▀     ')} 
${chalk.magentaBright('  ██▄▄███████████▄  ')} ${chalk.gray(dictionary.LOGO_TITLE_ACTION[ENV.locale] + ':')}
${chalk.magentaBright('  ▀█████████████▀   ')} ${chalk.greenBright(ENV.currentPath)}
`;

const LogoAfterAll = () => `
  🏁 ${dictionary.BUILDER_COMPLETE_FINISH[ENV.locale]}
  👉 ${dictionary.BUILDER_COMPLETE_HINT[ENV.locale]}
`

module.exports = {
    LogoServer,
    LogoStart,
    LogoAfterAll
}
