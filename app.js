const dirTree = require('directory-tree');
const fs = require('fs');
const copydir = require('copy-dir');

const createDirectory = require('./src/js-helpers/createDirectory');

const ViewsHeader = require('./src/views/header');
const ViewsFooter = require('./src/views/footer');
const Template = require('./src/views/index');

const tree = dirTree(
  './images',
  { extensions: /\.(jpeg|jpg|png|svg|gif)$/ },
  (item, path) => {
    // console.log(item);
  },
);

createDirectory();

const stream = fs.createWriteStream('build/index.html');
stream.once('open', function(fd) {
  // console.log('before:', tree['children']);
  const imagesList = tree['children'].sort(function(a, b) {
    if (a.type < b.type) return 1;
    if (a.type > b.type) return -1;
    return 0;
  });

  // console.log('after:', imagesList);

  stream.write(ViewsHeader('', 'style.css'));
  stream.write(
    '<div class="vg-container container-width-max"><div class="row">',
  );
  stream.write(Template(imagesList));
  stream.write('</div></div>');
  stream.write(ViewsFooter);

  if (process.env.TYPETEST && process.env.TYPETEST === 'AB') {
    stream.write('<h2>This is AB!!</h2>');
  }

  stream.end();
});

copydir.sync('images', 'build/images');
