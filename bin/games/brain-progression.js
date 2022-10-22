#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandom(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function progression(start, step) {
  let result = start;
  const coll = [];
  for (let i = 1; i <= 10; i += 1) {
    result += step;
    coll.push(result);
  }
  return (coll);
}

function blur(arr) {
  const mainArray = [...arr];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const bluredElement = mainArray[randomIndex];
  mainArray[randomIndex] = '..';
  mainArray.push(bluredElement);
  return mainArray;
} 

function brainProggression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const start = getRandom(1, 15);
    const step = getRandom(1, 5);
    const elementsOfProggression = progression(start, step);
    const bluredProgression = blur(elementsOfProggression);
    const bluredElement = bluredProgression.splice(bluredProgression.length - 1,1);
    const outPutProgression = (bluredProgression).join(' ');
    console.log(`Question: ${outPutProgression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(bluredElement)) {
      console.log('Correct!');
    }
    if (answer !== String(bluredElement)) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${bluredElement}'.\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}
brainProggression();
