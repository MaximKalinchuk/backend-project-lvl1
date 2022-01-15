import readlineSync from 'readline-sync';

const constructGame = (gameRules, getGameElements) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  const gameCount = 3;
  for (let i = 0; i < gameCount; i += 1) {
    const [gameQuestion, rightAnswer] = getGameElements();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default constructGame;
