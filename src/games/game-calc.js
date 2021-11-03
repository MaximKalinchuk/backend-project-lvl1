// import readlineSync from 'readline-sync';
import engine from '../index.js';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomOperator = () => {
  const operators = ['*', '+', '-'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const gameRules = 'What is the result of the expression?';

const gameBody = () => {
  const firstRandomNumber = getRandomInRange(2, 10);
  const secondRandomNumber = getRandomInRange(2, 10);
  const operator = randomOperator();
  const gameQuestion = `${firstRandomNumber} ${operator} ${secondRandomNumber}`;
  // eslint-disable-next-line no-eval
  const result = String(eval(`${firstRandomNumber} ${operator} ${secondRandomNumber}`));
  return [gameQuestion, result];
};
const gameCalc = () => engine(gameRules, gameBody);

export default gameCalc;
