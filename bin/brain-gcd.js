#!/usr/bin/env node

import check from '../src/utils.js';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('Find the greatest common divisor of given numbers.');

const euclidGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) a -= b;
    else b -= a;
  }
  return a;
};

let allCorrect = false;

const brainCalcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const expectedAnswer = euclidGcd(number1, number2);
    allCorrect = check(`${number1} ${number2}`, expectedAnswer, name);
    if (!allCorrect) break;
  }
};

while (!allCorrect) brainCalcGame();

console.log(`Congratulations, ${name}!`);
