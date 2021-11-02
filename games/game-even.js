import readlineSync from 'readline-sync';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInRange(2, 99);
    let variable;
    if (randomNumber % 2 === 0) {
      variable = 'yes';
    } else {
      variable = 'no';
    }

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === variable) {
      console.log('Correct!');
    } else if (answer !== variable) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${variable}'.`);
      console.log("Let's try again, Bill!");
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameEven;
