const dirTree = require('directory-tree');
const fs = require('fs');
const copydir = require('copy-dir');
const clear = require('clear');

const createDirectories = require('./src/js-helpers/createDirectories');

const { ViewsHeader, ViewsFooter, ViewsPolls, Template } = require('./src/views');
const ENV = require('./environment');

const tree = dirTree(
  ENV.currentPath,
  { extensions: /\.(jpeg|jpg|png|svg|gif)$/ },
  (item, path) => {
    // console.log(item);
  },
);

function Main() {

  createDirectories();

  copydir.sync(ENV.currentPath, `${ENV.currentPath}/build/images`, (stat, filepath, filename) => {
    if (stat === 'directory' && filename === 'build') {
      return false;
    }
    return true;
  }, function(err){
    console.log('error', err);
  });

  const styleFile = fs.readFileSync(`${__dirname}/public/${ENV.styleName}`, 'utf8');
  const streamStyles = fs.createWriteStream(`${ENV.currentPath}/build/${ENV.styleName}`);

  streamStyles.once('open', fd => {
    streamStyles.write(styleFile);
    streamStyles.end();
  })

  const stream = fs.createWriteStream(`${ENV.currentPath}/build/index.html`);
  stream.once('open', function(fd) {
    // console.log('before:', tree['children']);
    const imagesList = tree['children'].sort(function(a, b) {
      if (a.type < b.type) return 1;
      if (a.type > b.type) return -1;
      return 0;
    });

    // console.log('after:', imagesList);

    stream.write(ViewsHeader(process.env.title ? process.env.title : '', ENV.styleName));
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
}

Main();

module.exports = Main;
