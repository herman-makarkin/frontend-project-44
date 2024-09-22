#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let allCorrectAnswers = false;

const brainEvenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (expectedAnswer !== answer) {
      allCorrectAnswers = false;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`,
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
