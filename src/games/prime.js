import gameConstructor from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBody = () => {
  const generationNumber = getRandomInRange(2, 10);
  const gameQuestion = generationNumber;
  let rightAnswer = 'yes';
  for (let i = 2; i < generationNumber; i += 1) {
    const isPrime = generationNumber % i === 0;
    rightAnswer = isPrime ? 'no' : 'yes';

    if (isPrime) break;
  }
  return [gameQuestion, rightAnswer];
};

const gamePrime = () => gameConstructor(gameRules, gameBody);

export default gamePrime;
