const getSize = require('get-folder-size');

const maxFolderSize = 128 * 1024 * 1024;

const range = {
    kb: 1000,
    mb: 1000 * 1024,
    gb: 1000 * 1024 * 1024
};

const sizeInMb = (bytes) => {
    if (bytes < 0) bytes = bytes * -1;

    if (bytes < range.kb) return `${bytes} байт`;
    if (bytes >= range.kb && bytes < range.mb) return `${(bytes / 1024).toFixed(2)} Кб`;
    if (bytes >= range.mb && bytes < range.gb) return `${(bytes / 1024 / 1024).toFixed(2)} Мб`;
    if (bytes >= range.gb) return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} Гб`;

    return `${bytes}`;
}

function getFolderSize(folderPath) {
    return new Promise((resolve, reject) => {
        getSize(folderPath, (err, size) => {
            if (err) { 
                reject(err); 
            }

            resolve(size);
        });
    });
}

function validateFolder(folderPath) {
    getFolderSize(folderPath)
    .then(res => {
        if(res > maxFolderSize) {
            console.log('Текущая папка слишком большая для галереи...');
            console.log(`Размер: ${sizeInMb(res)}. Максимальный размер: ${sizeInMb(maxFolderSize)}`);
            process.exit();
        }
    })
    .catch(err => {
        console.log('Ошибочка', err);
        process.exit();
    })
}

module.exports = {
    sizeInMb,
    getFolderSize,
    validateFolder
}
