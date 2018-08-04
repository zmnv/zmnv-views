const PATH = require('path');
const dirTree = require('directory-tree');
const fs = require('fs');
const copydir = require('copy-dir');

const LayoutHeader = require('./src/header');
const LayoutFooter = require('./src/footer');

const tree = dirTree(
  './images',
  { extensions: /\.(jpeg|jpg|png|svg|gif)$/ },
  (item, PATH) => {
    // console.log(item);
  },
);

let template = '';

function doTemplate(inputArray) {
  
  inputArray.forEach(element => {
    if (element['type'] !== 'directory') {
      template += `<img src="${element['path']}" width="100" />\n`;
    } else {
      // console.log('DIRECTORY ' + element['name']);
      template += `<div class="inside">\n`;
      template += `<h2>${element['name']}</h2>\n`;
      doTemplate(element['children']);
      template += `</div>\n`;
    }
  });

  return template;
}

const isBuildFolderExist = fs.existsSync(PATH.join(__dirname, '/build'));
if (!isBuildFolderExist) {
  fs.mkdirSync('build');
}

const stream = fs.createWriteStream('build/rendered.html');
stream.once('open', function(fd) {

  const imagesList = tree['children'].sort(function(a, b) {
    const keyA = new Date(b.type),
          keyB = new Date(a.type);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  stream.write(LayoutHeader('Первый раз', 'lolka'));
  stream.write(doTemplate(imagesList));
  stream.write(LayoutFooter());
  stream.end();
});

copydir.sync('images', 'build/images');
