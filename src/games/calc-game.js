import * as pairs from '@hexlet/pairs';
import runGame from '../engine.js';
import { getRandomIntInclusive, getRandomElement } from '../utils.js';

const generateRoundData = (rangeStart = 0, rangeEnd = 25) => {
  const firstNumber = getRandomIntInclusive(rangeStart, rangeEnd);
  const secondNumber = getRandomIntInclusive(rangeStart, rangeEnd);
  const operationPairs = [
    pairs.cons('+', (a, b) => a + b),
    pairs.cons('-', (a, b) => a - b),
    pairs.cons('*', (a, b) => a * b),
  ];

  const operationPair = getRandomElement(operationPairs);
  const operationSymbol = pairs.car(operationPair);
  const getOperationResult = pairs.cdr(operationPair);
  const question = `${firstNumber} ${operationSymbol} ${secondNumber}`;
  const answer = getOperationResult(firstNumber, secondNumber).toString();

  return [question, answer];
};

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGame(description, generateRoundData);
};

export default runCalcGame;
