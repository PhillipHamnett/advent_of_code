const fs = require('fs');

const rockScore = 1;
const paperScore = 2;
const scissorsScore = 3;
const lossScore = 0;
const drawScore = 3;
const winScore = 6;

// Part 1
fs.readFile('./input.dat', 'utf8', (err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    let totalScore = 0;
    const games = data.split('\n');
    for(let game of games){
        const opponent = game.split(' ')[0];
        const player = game.split(' ')[1];
        if(player === 'X'){
            totalScore += rockScore;
            if(opponent === 'A') totalScore += drawScore;
            if(opponent === 'B') totalScore += lossScore;
            if(opponent === 'C') totalScore += winScore;
        }
        if(player === 'Y'){
            totalScore += paperScore;
            if(opponent === 'A') totalScore += winScore;
            if(opponent === 'B') totalScore += drawScore;
            if(opponent === 'C') totalScore += lossScore;
        }
        if(player === 'Z'){
            totalScore += scissorsScore;
            if(opponent === 'A') totalScore += lossScore;
            if(opponent === 'B') totalScore += winScore;
            if(opponent === 'C') totalScore += drawScore;
        }
    }
    console.log(totalScore);
});

// Part 2
fs.readFile('./input.dat', 'utf8', (err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    let totalScore = 0;
    const games = data.split('\n');
    for(let game of games){
        const opponent = game.split(' ')[0];
        const player = game.split(' ')[1];
        if(player === 'X'){
            totalScore += lossScore;
            if(opponent === 'A') totalScore += scissorsScore;
            if(opponent === 'B') totalScore += rockScore;
            if(opponent === 'C') totalScore += paperScore;
        }
        if(player === 'Y'){
            totalScore += drawScore;
            if(opponent === 'A') totalScore += rockScore;
            if(opponent === 'B') totalScore += paperScore;
            if(opponent === 'C') totalScore += scissorsScore;
        }
        if(player === 'Z'){
            totalScore += winScore;
            if(opponent === 'A') totalScore += paperScore;
            if(opponent === 'B') totalScore += scissorsScore;
            if(opponent === 'C') totalScore += rockScore;
        }
    }
    console.log(totalScore);
});