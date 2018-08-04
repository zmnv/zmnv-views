const PATH = require('path');
const dirTree = require('directory-tree');
const fs = require('fs');
const copydir = require('copy-dir');

const ViewsHeader = require('./src/views/header');
const ViewsContainer = require('./src/views/container');
const ViewsFooter = require('./src/views/footer');
const Template = require('./src/views/index');

const tree = dirTree(
  './images',
  { extensions: /\.(jpeg|jpg|png|svg|gif)$/ },
  (item, PATH) => {
    // console.log(item);
  },
);

const isBuildFolderExist = fs.existsSync(PATH.join(__dirname, '/build'));
if (!isBuildFolderExist) {
  fs.mkdirSync('build');
}

const stream = fs.createWriteStream('build/index.html');
stream.once('open', function(fd) {

  const imagesList = tree['children'].sort(function(a, b) {
    const keyA = new Date(b.type),
          keyB = new Date(a.type);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  stream.write(ViewsHeader(tree['name'], 'style.css'));
  stream.write(ViewsContainer(Template(imagesList)));
  stream.write(ViewsFooter);
  stream.end();
});

copydir.sync('images', 'build/images');
