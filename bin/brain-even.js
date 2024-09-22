#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const array = [2, 5, 8, 11];
let allCorrectAnswers = false;

const brainEvenGame = () => {
  for (let i = 0; i < array.length; i += 1) {
    const expectedAnswer = array[i] % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${array[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (expectedAnswer !== answer) {
      allCorrectAnswers = false;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`,
      );
      break;
    } else {
      console.log('Correct!');
      allCorrectAnswers = true;
    }
  }
};

while (!allCorrectAnswers) brainEvenGame();

console.log(`Congratulations, ${name}!`);
