import engine from '../index.js';
import { getRandomInRange } from '../random.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBody = () => {
  const randomNumber = getRandomInRange(2, 99);
  const gameQuestion = randomNumber;
  let result;
  if (randomNumber % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [gameQuestion, result];
};
const gameEven = () => engine(gameRules, gameBody);

export default gameEven;
