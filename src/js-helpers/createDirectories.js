// Не используется

const path = require('path');
const fs = require('fs');

// const folders = {
//     build: path.join(ENV.currentPath, './build'),
//     buildImages: path.join(ENV.currentPath, './build/images'),
// }

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

function createDirectories(folderPath) {
    const isBuildFolderExist = fs.existsSync(folderPath);

    if (isBuildFolderExist) deleteFolderRecursive(folderPath);
    fs.mkdirSync(folderPath);

    const isImagesFolderExist = fs.existsSync(`${folderPath}/images`);
    if (!isImagesFolderExist) {
        fs.mkdirSync(`${folderPath}/images`);
    }
}

module.exports = createDirectories;
