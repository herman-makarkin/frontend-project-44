#!/usr/bin/env node

import gameStart from '../src/cli.js';
import check from '../src/utils.js';

const name = gameStart();

console.log('What is the result of the expression?');

let allCorrect = false;

const brainCalcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const array = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 100),
    ];
    const operator = ['+', '-', '*'][array[1]];
    const expression = `${array[0]} ${operator} ${array[2]}`;
    let expectedAnswer;
    if (operator === '+') {
      expectedAnswer = array[0] + array[2];
    } else if (operator === '-') {
      expectedAnswer = array[0] - array[2];
    } else if (operator === '*') {
      expectedAnswer = array[0] * array[2];
    }
    allCorrect = check(expression, expectedAnswer, name);
    if (!allCorrect) break;
  }
};

while (!allCorrect) brainCalcGame();

console.log(`Congratulations, ${name}!`);
