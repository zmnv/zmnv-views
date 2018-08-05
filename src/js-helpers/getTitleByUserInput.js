

module.exports = getTitleByUserInput;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askTitle() {
  return new Promise((resolve) => {
    rl.question('Название страницы:\n§ ', (title) => { resolve(title) })
  })
}

function getTitleByUserInput() {
  askTitle().then((title) => {
    rl.close();
    return title;
  });
}

