const path = require('path');
const fs = require('fs');

const folders = {
    build: path.join(__dirname, '../../build'),
    buildImages: path.join(__dirname, '../../build/images'),
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
