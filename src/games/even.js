import constructGame from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBody = () => {
  const randomNumber = getRandomInRange(2, 99);
  const gameQuestion = randomNumber;

  const isEven = randomNumber % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';

  return [gameQuestion, rightAnswer];
};
const gameEven = () => constructGame(gameRules, gameBody);

export default gameEven;
