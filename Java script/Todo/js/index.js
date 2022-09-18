function singSong() {
    console.log("Do")
    console.log("RE")
    console.log("MI")
}

function greet(firstName, lastName){
    console.log(`Hey  there, ${firstName} ${lastName[0]}.`)
    //console.log(`firstName is : ${firstName}`)
   // console.log("HI!")
}

function repeat(str,numTimes) {
    let result = '';
    for (let i =0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
}

function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log('Snake Eyes!');
    } else {
       console.log('Not Snake Eyes!');
    }
}


function add(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
   // else{
   // let sum = x + y;
    return sum;
   // }
}


function isShortsWeather(temperature) {
    if(temperature >= 75) {
        return true;
    } else return false;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function lastElement(arr) {
    if(arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}


function sumArray(arr) {
    let total = 0;
    for(let i=0; i<arr.length;i++){
        total = total+arr[i];
    }
    return total;
}


const days = {
    1: 'Monday',
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
 
const returnDay = (number) => {
    if(number < 1 || number > 7) {
        return null;
    }
    return (days[number])
}

   




/*function rant(message){
    for(let i = 0; i<3; i++){
        console.log(message.toUpperCase());
    }
}*/


//let die1 = Math.floor(Math.random()*6) +1;