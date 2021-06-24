import readlineSync from 'readline-sync';

export default (gameDescription, generateRoundData) => {
  const roundsToWin = 3;
  let roundsCount = 0;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

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
