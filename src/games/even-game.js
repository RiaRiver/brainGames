import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRoundData = (rangeStart = 0, rangeEnd = 100) => {
  const question = getRandomIntInclusive(rangeStart, rangeEnd);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
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

export default runEvenGame;
