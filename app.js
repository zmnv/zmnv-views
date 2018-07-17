const PATH = require('path');
const dirTree = require('directory-tree');
const fs = require('fs');

const LayoutHeader = require('./app/header');
const LayoutFooter = require('./app/footer');

const tree = dirTree('./src', {extensions:/\.txt$/}, (item, PATH) => {
	// console.log(item);
});

const stream = fs.createWriteStream("build/my_file.html");
stream.once('open', function(fd) {
  stream.write(LayoutHeader('Первый раз', 'lolka'));
  stream.write(JSON.stringify(tree));
  stream.write(LayoutFooter())
  stream.end();
});

// console.log(tree);