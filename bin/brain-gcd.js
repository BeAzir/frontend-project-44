#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gcd = (x, y) => {
	if(y > x) {
		return gcd(y, x)
	}
	if (!y){
		return x
	}
	return gcd(y, x % y);
};

const getRandom = (min, max) => {
	return Math.round((Math.random() * (max - min)))
};


const brainGcd = () => {

	    console.log('Welcome to the Brain Games!');
	    const name = readlineSync.question("May i have your name? ");
	    console.log(`Hello, ${name}!`);
	    console.log('Find the greatest common divisor of given numbers.');
	    

	    for(let i = 1; i <= 3; i +=1){
		        const randomNum1 = getRandom(0, 100);
		        const randomNum2 = getRandom(0, 25);
		            console.log(`Question: ${randomNum1} ${randomNum2}`);
		            const answer = readlineSync.question('Your answer: ');

		        if(answer === String(gcd(randomNum1, randomNum2))){
				        console.log('Correct!')
				    } else {
					            const correctAnswer = gcd(randomNum1, randomNum2);
					            return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again ${name}`);
					        }

		        if(i === 3){
				        return console.log(`Congratulations, ${name}!`)
				    }

		        }
}
brainGcd();
	
