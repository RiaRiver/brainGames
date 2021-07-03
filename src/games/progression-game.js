import runGame from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateArithmProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (i * diff));
  }

  return progression;
};

const generateRoundData = () => {
  const startNumber = getRandomIntInclusive(0, 150);
  const progressionDiff = getRandomIntInclusive(1, 50);
  const progressionLength = getRandomIntInclusive(5, 10);
  const hiddenIndex = getRandomIntInclusive(0, progressionLength - 1);
  const replacer = '..';

  const progression = generateArithmProgression(startNumber, progressionDiff, progressionLength);

  const question = progression.map((item, ind) => (ind === hiddenIndex ? replacer : item)).join(' ');
  const answer = progression[hiddenIndex].toString();

  return [question, answer];
};

const runGcdGame = () => {
  runGame(description, generateRoundData);
};

export default runGcdGame;
