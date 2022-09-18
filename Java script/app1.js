const testScores ={
    keenam:80,
    damon:67,
    kim:89,
    shawn:91,
    marlon:72,
    dwayne:77,
    nadia:83,
    elvira:97,
    vonnie:60,
}

//for(let person in testScores){

  //  console.log(`${person} scored ${testsScores[person]}`)
//}

let total =0;
let scores = Object.values(testScores);
for (let score of scores){
    total += score;
}
console.log(total / scores.length)


// guess the game//
/*let maximum =parseInt( prompt("Enter the maximum number!"));
while(!maximum){
    maximum =parseInt( prompt("Enter the maximum number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum );

let guess =parseInt(prompt("Enter your first guess!"));
let attempts = 1;


while(parseInt(guess) !== targetNum){
    if(guess === 'q')break;
    attempts++;
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess:");
    }else{
        guess = prompt("Too low! Enter a new guess:");
    }


}

if(guess === 'q'){
    console.log("OK, YOU QUIT!")
}else{
    console.log("CONGRATS YOU WIN!")

console.log(`You got it! It took you ${attempts} guesses`)
}*/