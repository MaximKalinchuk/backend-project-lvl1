import constructGame from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const remainder = firstNumber % secondNumber;
    return gcd(secondNumber, remainder);
  }
  return firstNumber;
};

const getGameElements = () => {
  const firstRandomNumber = getRandomInRange(2, 10);
  const secondRandomNumber = getRandomInRange(2, 10);

  const gameQuestion = `${firstRandomNumber} ${secondRandomNumber}`;
  const rightAnswer = String(gcd(firstRandomNumber, secondRandomNumber));
  return [gameQuestion, rightAnswer];
};

export default () => constructGame(gameRules, getGameElements);
