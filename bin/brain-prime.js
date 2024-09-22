#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (n) => {
  for (let i = 2; i < Math.log(n) + 1; i += 1) if (n % i === 0) return false;
  return true;
};

let allCorrectAnswers = false;

const brainCalcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const expectedAnswer = isPrime(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== expectedAnswer.toString()) {
      allCorrectAnswers = false;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`,
      );
      break;
    } else {
      allCorrectAnswers = true;
      console.log('Correct!');
    }
  }
};

while (!allCorrectAnswers) brainCalcGame();

console.log(`Congratulations, ${name}!`);
