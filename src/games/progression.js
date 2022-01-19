import constructGame from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'What number is missing in the progression?';

const makeProgression = (firstElement, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstElement + i * step);
  }
  return progression;
};

const getGameElements = () => {
  const firstProgressionElement = getRandomInRange(2, 5);
  const progressitonStep = getRandomInRange(2, 5);
  const progressionLength = getRandomInRange(10, 15);

  const progression = makeProgression(firstProgressionElement, progressitonStep, progressionLength);
  const hiddenElement = getRandomInRange(0, 9);
  const rightAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  return [progression.join(' '), rightAnswer];
};

export default () => constructGame(gameRules, getGameElements);
