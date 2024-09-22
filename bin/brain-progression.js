#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('Find the greatest common divisor of given numbers.');

let allCorrectAnswers = false;

const brainProgressionGame = () => {
  console.log('Question: ');
  for (let i = 0; i < 3; i += 1) {
    let number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    const expectedAnswer = number1 + number2 * 5;
    for (let j = 0; j < 11; j += 1) {
      if (j === 5) {
        console.log('..');
        number1 += number2;
      } else {
        console.log(number1);
        number1 += number2;
      }
    }

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

while (!allCorrectAnswers) brainProgressionGame();

console.log(`Congratulations, ${name}!`);
