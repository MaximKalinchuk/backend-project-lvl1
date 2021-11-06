import engine from '../index.js';
import { getRandomInRange, randomOperator } from '../random.js';

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
