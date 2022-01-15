import constructGame from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = () => {
  const value = getRandomInRange(2, 5);
  const progression = [];
  for (let i = value; progression.length < 10; i += value) {
    progression.push(i);
  }
  return progression;
};

const gameBody = () => {
  const progression = getProgression();
  const hiddenElement = getRandomInRange(0, 9);
  const rightAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  return [progression.join(' '), rightAnswer];
};

const gameProgression = () => constructGame(gameRules, gameBody);

export default gameProgression;
