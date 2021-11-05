import engine from '../index.js';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameRules = 'What number is missing in the progression?';

const gererationProgression = () => {
  const value = getRandomInRange(2, 5);
  const generationArray = [];
  for (let i = value; generationArray.length < 10; i += value) {
    generationArray.push(i);
  }
  const hiddenElement = getRandomInRange(0, 9);
  const result = String(generationArray[hiddenElement]);
  generationArray[hiddenElement] = '..';
  return [generationArray.join(' '), result];
};

const gameBody = () => {
  const [gameQuestion, result] = gererationProgression();
  return [gameQuestion, result];
};

const gameProgression = () => engine(gameRules, gameBody);

export default gameProgression;
