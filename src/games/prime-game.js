import runGame from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num) => {
  if (num <= 1) return false;
  const numSqrt = Math.sqrt(num);

  for (let divisor = 2; divisor <= numSqrt; divisor += 1) {
    if (num % divisor === 0) return false;
  }

  return true;
};

const generateRoundData = (rangeStart = 0, rangeEnd = 200) => {
  const question = getRandomIntInclusive(rangeStart, rangeEnd);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runGcdGame = () => {
  runGame(description, generateRoundData);
};

export default runGcdGame;
