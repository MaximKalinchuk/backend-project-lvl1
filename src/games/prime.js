import constructGame from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameElements = () => {
  const generationNumber = getRandomInRange(2, 10);
  const gameQuestion = generationNumber;

  const rightAnswer = isPrime(generationNumber) ? 'yes' : 'no';

  return [gameQuestion, rightAnswer];
};

export default () => constructGame(gameRules, getGameElements);
