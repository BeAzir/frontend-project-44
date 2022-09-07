#!/usr/bin/env node
import readlineSync from 'readline-sync';

function primeOrNot(number) {
  const coll = [];
  for (let i = 1; i <= number; i += 1) {
    if(number % i === 0){
      coll.push(i);
    }
  }
  if (coll.length === 2) {
    return 'Prime';
  }
    return 'Not prime';
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function brainPrime() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandom(1, 25);
    const CorrectAnswer = primeOrNot(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (CorrectAnswer === 'Prime' && answer !== 'yes') {
    return console.log(`'No' is wrong asnwer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
            } else if (CorrectAnswer === 'Not prime' && answer !== 'no') {
               return console.log(`'yes' is wrong asnwer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
  }
            console.log('Correct!');

           if(i === 3){
                return console.log(`Congratulations, ${name}!`);
   }
    }
};
brainPrime();
