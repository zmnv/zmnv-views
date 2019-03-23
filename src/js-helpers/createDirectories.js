// Не используется

const path = require('path');
const fs = require('fs');
const ENV = require('../../environment');

const Confirm = require('prompt-confirm');
const prompt = new Confirm('Do you like chocolate?');

const folders = {
    build: path.join(ENV.currentPath, './build'),
    buildImages: path.join(ENV.currentPath, './build/images'),
}

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

function createDirectories() {
    const isBuildFolderExist = fs.existsSync(folders.build);

    if (isBuildFolderExist) deleteFolderRecursive(folders.build);
    fs.mkdirSync(folders.build);

    const isImagesFolderExist = fs.existsSync(folders.buildImages);
    if (!isImagesFolderExist) {
        fs.mkdirSync(folders.buildImages);
    }
}

module.exports = createDirectories;
