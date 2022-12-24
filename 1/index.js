const fs = require('fs');

fs.readFile('./input.dat', 'utf8', (err,data) => {
    if(err) {
        console.error(err);
        return;
    }
    const elves = data.split('\n\n');
    const caloriesPerElf = [];
    let highestCalories = 0;
    for(let elf of elves) {
        const allFood = elf.split('\n');
        let totalCalories = 0;
        for(let food of allFood) {
            totalCalories += Number(food);
        }
        caloriesPerElf.push(totalCalories);
        if(totalCalories > highestCalories) highestCalories = totalCalories;
    }
    caloriesPerElf.sort((a,b) => {return b - a});
    let topThreeElfCalories = 0;
    for(let i = 0; i < 3; ++i){
        topThreeElfCalories += Number(caloriesPerElf[i]);
    }
    console.log('Highest Calories:',highestCalories);
    console.log('Top Three Highest Calories:',topThreeElfCalories);
});
