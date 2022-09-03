#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
    const name = readlineSync.question("May i have your name?: ");
    console.log(`Hello, ${name}!`);
    let result = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for(let i = 1; i <= 3; i += 1){
    const randomNumber = Math.random() * 10;
    const roundNumber = Math.round(randomNumber);

        console.log(roundNumber);
        const answer = readlineSync.question('Your answer? ')

        if(roundNumber % 2 === 0 && answer !== 'yes'){
            return console.log("'No' is wrong asnwer ;(. Correct answer was 'yes'.\n Lets try again")
        } else if (roundNumber % 2 !== 0 && answer !== 'no'){
            return console.log("'yes' is wrong asnwer ;(. Correct answer was 'no'.\n Lets try again")
        }
        console.log('Correct!');

        if(i === 3){
            return console.log(`Congratulations, ${name}!`);
        }
    };
};
brainEven();
