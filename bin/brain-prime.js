#!/usr/bin/env node

import check from '../src/utils.js';
import gameStart from '../src/cli.js';

const name = gameStart();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n) + 1; i += 1) if (n % i === 0) return false;
  return true;
};
let allCorrect = false;
const brainCalcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 50) + 1;
    const expectedAnswer = isPrime(number);
    allCorrect = check(number, expectedAnswer, name);
    if (!allCorrect) break;
  }
};

while (!allCorrect) brainCalcGame();

console.log(`Congratulations, ${name}!`);
