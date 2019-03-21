// Не используется

const readline = require('readline');

// const exec = require('child_process').exec;

// reject(new Error("Network Error"));

function askAboutPageTitle() {

    return new Promise(function(resolve, reject) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
          
          rl.question('What do you think of Node.js? ', (answer) => {
            // TODO: Log the answer in a database
            console.log(`👽  ${answer}`);
          
            rl.close();
            resolve(answer);
          });

    });

}

module.exports = askAboutPageTitle;
