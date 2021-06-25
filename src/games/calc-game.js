import runGame from '../index.js';
import { getRandomIntInclusive, getRandomElement } from '../utils.js';

const description = 'What is the result of the expression?';
const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const generateRoundData = (rangeStart = 0, rangeEnd = 25) => {
  const firstNumber = getRandomIntInclusive(rangeStart, rangeEnd);
  const secondNumber = getRandomIntInclusive(rangeStart, rangeEnd);

  const operation = getRandomElement(operations);
  const [operator, getOperationResult] = operation;
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = getOperationResult(firstNumber, secondNumber).toString();

  return [question, answer];
};

const runCalcGame = () => {
  runGame(description, generateRoundData);
};

export default runCalcGame;
