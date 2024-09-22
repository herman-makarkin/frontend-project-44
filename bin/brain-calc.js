#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameStart from '../src/cli.js';

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
    const expectedAnswer = eval(expression);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== expectedAnswer.toString()) {
      allCorrectAnswers = false;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`,
      );
      break;
    } else allCorrectAnswers = true;
  }
};

while (!allCorrectAnswers) brainCalcGame();

console.log(`Congratulations, ${name}!`);
