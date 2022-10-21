#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandom(min, max) { return Math.round(Math.random() * (max - min)); }
function getRandomSign() {
  const signs = ['-', '+', '*'];
  const generate = Math.floor(Math.random() * signs.length);
  const randomValue = signs[generate];
  return randomValue;
}
const mutant = (Num1, Sign, Num2) => {
  if (Sign === '+') {
    return Num1 + Num2;
  }

  if (Sign === '-') {
    return Num1 - Num2;
  }

  if (Sign === '*') {
    return Num1 * Num2;
  }
  return undefined
}
function brainCalc() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum1 = getRandom(0, 25);
    const randomNum2 = getRandom(0, 25);
    const randomSign = getRandomSign();
    console.log(`Question: ${randomNum1} ${randomSign} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(mutant(randomNum1, randomSign, randomNum2))) {
      let output = 'Correct!';
    } else {
      const CorrectAnswer = String(mutant(randomNum1, randomSign, randomNum2));
      const wrongAnswer = String(answer);
      output = `${wrongAnswer} is wrong answer ;(. Correct answer was ${CorrectAnswer}.\nLet's try again, ${name}!`
    }
    if (i === 3) {
      output = `Congratulations, ${name}!`;
    }
    return output;
  }
}

brainCalc();
