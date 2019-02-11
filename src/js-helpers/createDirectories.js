const path = require('path');
const fs = require('fs');
const ENV = require('../../environment');

const folders = {
    build: path.join(ENV.currentPath, './build'),
    buildImages: path.join(ENV.currentPath, './build/images'),
}

function createDirectories() {
    const isBuildFolderExist = fs.existsSync(folders.build);
    if (!isBuildFolderExist) {
      fs.mkdirSync(folders.build);
    }
    
    const isImagesFolderExist = fs.existsSync(folders.buildImages);
    if (!isImagesFolderExist) {
      fs.mkdirSync(folders.buildImages);
    }
}

module.exports = createDirectories;
