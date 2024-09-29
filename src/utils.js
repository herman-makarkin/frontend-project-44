import readlineSync from 'readline-sync';

function check(question, expectedAnswer, name) {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== expectedAnswer.toString()) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`,
    );
    return false;
  }
  console.log('Correct!');
  return true;
}

export default check;
