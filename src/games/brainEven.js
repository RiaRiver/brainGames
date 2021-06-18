import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const isEven = (num) => num % 2 === 0;

const generateRound = (rangeStart = 0, rangeEnd = 100) => {
  const question = getRandomIntInclusive(rangeStart, rangeEnd);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const getLossMsg = (playersAnswer, correctAnswer) => `'${playersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gamesToWin = 3;
  let gamesCount = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  while (gamesCount < gamesToWin) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const playersAnswer = readlineSync.question('Your answer: ');

    if (playersAnswer !== answer) {
      console.log(getLossMsg(playersAnswer, answer));
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    gamesCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
