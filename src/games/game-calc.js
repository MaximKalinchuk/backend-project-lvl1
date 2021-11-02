import readlineSync from 'readline-sync';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomOperator = () => {
  const operators = ['*', '+', '-'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomInRange(2, 10);
    const secondRandomNumber = getRandomInRange(2, 10);
    const operator = randomOperator();

    console.log(`Question: ${firstRandomNumber} ${operator} ${secondRandomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-eval
    const result = eval(`${firstRandomNumber} ${operator} ${secondRandomNumber}`);

    if (answer === String(result)) {
      console.log('Correct!');
      counter += 1;
    } else if (answer !== String(result)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default gameCalc;
