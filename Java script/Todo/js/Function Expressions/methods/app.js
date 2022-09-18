/*const myMath = {
    PI:3.14159,
    square:  function (num){
        return num * num;
    },
    cube: function (num) {
        return num **  3;
    }
}*/
const myMath = {
    PI:3.14159,
    square(num){
        return num * num;
    },
    cube(num) {
        return num **  3;
    }
}


const cat = {
    name:'Blue Steele',
    color:'grey',
    breed:'Scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWWW`);

    }
}

const meow2 = cat.meow; 


const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return ('EGG');
    }
};