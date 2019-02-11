const dirTree = require('directory-tree');
const fs = require('fs');
const copydir = require('copy-dir');

const createDirectories = require('./src/js-helpers/createDirectories');

const { ViewsHeader, ViewsFooter, ViewsPolls, Template } = require('./src/views');

const tree = dirTree(
  './images',
  { extensions: /\.(jpeg|jpg|png|svg|gif)$/ },
  (item, path) => {
    // console.log(item);
  },
);

createDirectories();

const stream = fs.createWriteStream('build/index.html');
stream.once('open', function(fd) {
  // console.log('before:', tree['children']);
  const imagesList = tree['children'].sort(function(a, b) {
    if (a.type < b.type) return 1;
    if (a.type > b.type) return -1;
    return 0;
  });

  // console.log('after:', imagesList);

  stream.write(ViewsHeader(process.env.title ? process.env.title : '', 'style.css'));
  stream.write(
    '<div class="vg-container container-width-max"><div class="row">',
  );
  stream.write(Template(imagesList));
  stream.write('</div></div>');
  stream.write(ViewsFooter);

  if (process.env.LAYOUT === 'CHECKS') {
    stream.write(ViewsPolls);
  }

  stream.end();
});

copydir.sync('images', 'build/images');
