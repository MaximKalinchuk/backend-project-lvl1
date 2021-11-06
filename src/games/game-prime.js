import engine from '../index.js';
import { getRandomInRange } from '../random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBody = () => {
  const generationNumber = getRandomInRange(2, 10);
  const gameQuestion = generationNumber;
  let result = 'yes';
  for (let i = 2; i < generationNumber; i += 1) {
    if (generationNumber % i === 0) {
      result = 'no';
      break;
    } else {
      result = 'yes';
    }
  }
  return [gameQuestion, result];
};

const gamePrime = () => engine(gameRules, gameBody);

export default gamePrime;
