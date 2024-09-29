#!/usr/bin/env node

import check from '../src/utils.js';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('What number is missing in the progression?');

let allCorrect = false;

const brainProgressionGame = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    let number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    const expectedAnswer = number1 + number2 * 5;
    for (let j = 0; j < 11; j += 1) {
      if (j === 5) {
        number1 += number2;
        array.push('..');
      } else {
        number1 += number2;
        array.push(number1);
      }
    }
    allCorrect = check(array.join(' '), expectedAnswer, name);
    if (!allCorrect) break;
  }
};

while (!allCorrect) brainProgressionGame();

console.log(`Congratulations, ${name}!`);
