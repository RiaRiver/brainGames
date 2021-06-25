import { input, output } from './consoleIO.js';

export default (gameDescription, generateRoundData) => {
  const roundsToWin = 3;

  output('Welcome to the Brain Games!');
  const playerName = input('May I have your name? ');
  output(`Hello, ${playerName}!`);
  output(gameDescription);

  for (let roundsCount = 0; roundsCount < roundsToWin; roundsCount += 1) {
    const [question, correctAnswer] = generateRoundData();
    output(`Question: ${question}`);
    const playerAnswer = input('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      output(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      output(`Let's try again, ${playerName}!`);
      return;
    }

    output('Correct!');
  }

  output(`Congratulations, ${playerName}!`);
};
