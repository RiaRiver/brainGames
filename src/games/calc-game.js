import readlineSync from 'readline-sync';
import * as pairs from '@hexlet/pairs';
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
  const roundsToWin = 3;
  let roundsCount = 0;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);

  while (roundsCount < roundsToWin) {
    const [question, correctAnswer] = generateRoundData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
    roundsCount += 1;
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default runCalcGame;
