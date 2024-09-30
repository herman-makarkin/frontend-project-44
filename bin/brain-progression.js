#!/usr/bin/env node

import check from '../src/utils.js';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('What number is missing in the progression?');

let allCorrect = false;

const brainProgressionGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const array = [];
    let number1 = Math.floor(Math.random() * 9) + 2;
    const number2 = Math.floor(Math.random() * 6) + 2;
    const expectedAnswerPosition = Math.floor(Math.random() * 10) + 1;
    const expectedAnswer = number1 + number2 * expectedAnswerPosition;
    for (let j = 0; j < 11; j += 1) {
      if (j === expectedAnswerPosition - 1) {
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
