import gameConstructor from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBody = () => {
  const randomNumber = getRandomInRange(2, 99);
  const gameQuestion = randomNumber;
  let rightAnswer;
  if (randomNumber % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [gameQuestion, rightAnswer];
};
const gameEven = () => gameConstructor(gameRules, gameBody);

export default gameEven;
