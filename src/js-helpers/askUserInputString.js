const readline = require('readline');

function askUserInputString(question = 'no question?') {
    return new Promise(function(resolve, reject) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
      });

      console.log(question);

      rl.on('line', (input) => {
        rl.close();
        resolve(input);
      });

      // rl.question(question, (answer) => {
      //   rl.close();
      //   resolve(answer);
      // });
    });
}

module.exports = askUserInputString;
