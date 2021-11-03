import readlineSync from 'readline-sync';

const engine = (gameRules, gameBody) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, result] = gameBody();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
      counter += 1;
    } else if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      break;
    }

    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default engine;
