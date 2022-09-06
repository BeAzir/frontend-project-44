#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandom = (min, max) => {return Math.round(Math.random() * (max - min))};
const getRandomSign = () => {
	const signs = ['-', '+', '*'];
	const length = signs.length;
	const generate = Math.floor(Math.random() * length);
	const randomValue = signs[generate];
	return randomValue
};
const mutant = (Num1, Sign, Num2) => {
        if (Sign === '+') {
            return Num1 + Num2
        };

        if (Sign === '-') {
            return Num1 - Num2
        };

        if (Sign === '*') {
            return Num1 * Num2
        };
};
const brainCalc = () => {
	    console.log('Welcome to the Brain Games!');
	    const name = readlineSync.question("May i have your name? ");
	    console.log(`Hello, ${name}!`);
	    console.log('What is the result of the expression?');
	    for(let i = 1; i <= 3; i += 1){
		            const randomNum1 = getRandom(0, 25);
		            const randomNum2 = getRandom(0, 25);
		            const randomSign = getRandomSign()
		            console.log(`Question: ${randomNum1} ${randomSign} ${randomNum2}`)
		            const answer = readlineSync.question('Your answer: ');

		            if(answer === String(mutant(randomNum1, randomSign, randomNum2))){
				                console.log('Correct!')
				            } else {
						                const CorrectAnswer = String(mutant(randomNum1, randomSign, randomNum2));
						                const wrongAnswer = String(answer);
						                return console.log(`${wrongAnswer} is wrong answer ;(. Correct answer was ${CorrectAnswer}.\nLet's try again, ${name}!`);
						            }

		            if (i === 3){
				                console.log(`Congratulations, ${name}!`);
				            };
		        
		        }
};

brainCalc();
