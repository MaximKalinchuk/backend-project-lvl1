import constructGame from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'What is the result of the expression?';

const getRightAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '*':
      return String(num1 * num2);
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    default:
      throw new Error('Invalid operator');
  }
};

const getGameElements = () => {
  const operators = ['*', '+', '-'];
  const randomOperator = operators[getRandomInRange(0, 2)];
  const firstRandomNumber = getRandomInRange(2, 10);
  const secondRandomNumber = getRandomInRange(2, 10);

  const gameQuestion = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;

  const rightAnswer = getRightAnswer(firstRandomNumber, secondRandomNumber, randomOperator);

  return [gameQuestion, rightAnswer];
};

export default () => constructGame(gameRules, getGameElements);
