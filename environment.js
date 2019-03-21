const { UserLanguage } = require('./src/js-helpers/polyglot');
const currentLang = new UserLanguage();

const options = {
    currentPath: process.cwd(),
    locale: currentLang.current(),
    styleName: 'style-initial.css'
};

module.exports = {
    ...options,
}
