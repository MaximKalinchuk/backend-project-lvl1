import engine from '../index.js';
import { getRandomInRange } from '../random.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gameBody = () => {
  const firstRandomNumber = getRandomInRange(2, 10);
  const secondRandomNumber = getRandomInRange(2, 10);
  const gameQuestion = `${firstRandomNumber} ${secondRandomNumber}`;
  const nod = (firstNumber, secondNumber) => {
    if (secondNumber !== 0) {
      const someNumber = firstNumber % secondNumber;
      return nod(secondNumber, someNumber);
    }
    return firstNumber;
  };
  const result = String(nod(firstRandomNumber, secondRandomNumber));
  return [gameQuestion, result];
};

const GameGCD = () => engine(gameRules, gameBody);

export default GameGCD;
