import constructGame from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['*', '+', '-'];
  return operators[getRandomInRange(0, 2)];
};

const gameBody = () => {
  const firstRandomNumber = getRandomInRange(2, 10);
  const secondRandomNumber = getRandomInRange(2, 10);
  const operator = getRandomOperator();
  const gameQuestion = `${firstRandomNumber} ${operator} ${secondRandomNumber}`;

  let rightAnswer;
  if (operator === '*') {
    rightAnswer = String(firstRandomNumber * secondRandomNumber);
  } else if (operator === '+') {
    rightAnswer = String(firstRandomNumber + secondRandomNumber);
  } else {
    rightAnswer = String(firstRandomNumber - secondRandomNumber);
  }
  return [gameQuestion, rightAnswer];
};

const gameCalc = () => constructGame(gameRules, gameBody);

export default gameCalc;
