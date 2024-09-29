#!/usr/bin/env node

import readlineSync from 'readline-sync';
import defeat from '../src/utils.js';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('Find the greatest common divisor of given numbers.');

const euclidGcd = (a, b) => {
  while (a !== b) {
    if (a > b) a -= b;
    else b -= a;
  }
  return a;
};

let allCorrectAnswers = false;

const brainCalcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const expectedAnswer = euclidGcd(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== expectedAnswer.toString()) {
      allCorrectAnswers = false;
      defeat(answer, expectedAnswer, name);
      break;
    } else {
      allCorrectAnswers = true;
      console.log('Correct!');
    }
  }
};

while (!allCorrectAnswers) brainCalcGame();

console.log(`Congratulations, ${name}!`);
