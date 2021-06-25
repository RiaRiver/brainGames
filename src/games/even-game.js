import runGame from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRoundData = (rangeStart = 0, rangeEnd = 100) => {
  const question = getRandomIntInclusive(rangeStart, rangeEnd);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => {
  runGame(description, generateRoundData);
};

export default runEvenGame;
