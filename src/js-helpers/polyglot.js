const chalk = require('chalk').default;

const dictionary = {
    LOGO_TITLE_ACTION: {
        ru_RU: 'Сканирую директорию',
        en_US: 'Scanning directory'
    },
    BUILDER_FILE_COPYED: {
        ru_RU: 'скопирован в папку',
        en_US: 'copied to folder'
    },
    BUILDER_FILE_COPY_ERROR: {
        ru_RU: 'Ошибка копирования файлов',
        en_US: '[COPY FILES] ERROR'
    },
    BUILDER_COMPLETE_FINISH: {
        ru_RU: 'ЗАВЕРШЕНО',
        en_US: 'DONE'
    },
    BUILDER_COMPLETE_HINT: {
        ru_RU: `Переместите содержимое папки ${chalk.bold('/build')} на сервер,
     либо создайте свой ${chalk.cyanBright.bold('zmnv-views serve')}`,
        en_US: `Just copy files inside ${chalk.bold('/build')} to your static server
     or serve yours by ${chalk.cyanBright.bold('zmnv-views serve')}`
    },
    SERVER_CLOSE_HINT: {
        ru_RU: 'Нажмите CTRL+C, чтобы остановить сервер...',
        en_US: 'Press CTRL+C to exit...'
    }
}

class UserLanguage {
    constructor() {
        this.env = process.env;
        this.language = this.env.LANG || this.env.LANGUAGE || this.env.LC_ALL || this.env.LC_MESSAGES;
        this.locale = this.language.split('.')[0];
    }

    current() { return this.locale; }

    currentFull() { return this.language; }
}

module.exports = {
    dictionary,
    UserLanguage
}
