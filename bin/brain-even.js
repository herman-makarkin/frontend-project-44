#!/usr/bin/env node

import check from '../src/utils.js';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let allCorrect = false;
const brainEvenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
    allCorrect = check(number, expectedAnswer, name);
    if (!allCorrect) break;
  }
};

while (!allCorrect) brainEvenGame();

console.log(`Congratulations, ${name}!`);
