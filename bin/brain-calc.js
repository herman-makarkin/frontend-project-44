#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameStart from '../src/cli.js';
import defeat from '../src/utils.js';

const name = gameStart();

console.log('What is the result of the expression?');

let allCorrectAnswers = false;

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

    switch (operator) {
      case '+':
        expectedAnswer = array[0] + array[2];
        break;
      case '-':
        expectedAnswer = array[0] - array[2];
        break;
      case '*':
        expectedAnswer = array[0] * array[2];
        break;
      default:
        console.error('Invalid operator');
        throw new Error('Invalid operator');
    }

    console.log(`Question: ${expression}`);
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
