const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name or nickname? ', (answer) => {
  rl.question('What is your favourite programming language? ', (language) => {
    rl.question('What do you like to listen to while coding? ', (music) => {
      rl.question('What do you eat when you\'re not progamming? ', (food) => {
        rl.question('Amy I asking you too many questions? ', (questions) => {

          console.log(`Hi there, I'm ${answer}! I love listening to ${music} while programming in ${language}. When I'm not programming, you can find me eating ${food} and saying "${questions}" to questions you ask me.`);
          rl.close();
        });
      });
    });
  });
});
