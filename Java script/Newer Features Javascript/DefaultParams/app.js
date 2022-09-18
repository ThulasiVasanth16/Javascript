//function rollDie(numSides) {
//  if(numSides === undefined){
//        numSides = 6;
//
//    }
//    return Math.floor(Math.random() * numSides) + 1
//}



/*function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}


function  greet(names,person) {
     console.log (`${names},${person}!`)
}*/





//SPREAD

//Math.max(...num)



const cats =['Blue','Scout','Rocket'];
const dogs = ['Rusty','Wyatt'];



const allPets = [ ...cats,...dogs]
    


const feline = {legs: 4, family: 'Felidae'};
const canine = {isFurry: true, family:'Caninae'}



const catDog = {...feline, ...canine};

//{...[2,3,4,5]}



const dataFromForm = {
    email:'blueman@gmail.com',
    password:'tobias123!',
    username:'tfumke'
}

const newUser = {...dataFromForm, id:2345, isAdmin:false}


//Rest Paras

//function sum() {
  //  console.log(arguments)
//}



//function sum() {
//    return arguments.reduce((total,el)=> total + el)//

//}

//function sum(...nums) {
 //  return  nums.reduce((total,el)=> total + el)

    //console.log(nums)
//}



/*restparams

function raceResults(gold,silver,...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)


}*/



//destructuring


/*const scores  =[92353, 923465,8376754,776754,113214,2143575]

const highScore = scores[0];
const secondHighScore = scores[1];


const[gold,silver,bronze,...everyoneElse]=scores;



//destructuring objects*/


  const user = {
      email:'harvey@gmail.com',
      password: 'hello346cdsn',
      firstName:'Harvey',
      lastName:'milk',
      born: 2003,
      died:2022,
      bio:'Harvey Bernad Milk was an American Politician and the first openly gay elected offical in the history of California',
      city:'San Franisoo',
      state: 'California'
  }


  //const firstName =user.firstName;
 // const lastName = user.lastName;
//const email = user.email;
//const { email,firstName,lastName,bio,city} =user;
//
//const{born:birthYear,died:deadYear} = user;



//PARAM DESTRUCTING

//function fullName(user){
  //  return`${user.firstName} ${user.lastName}`
//}


function fullName({firstName,lastName}){
    return`${user.firstName} ${user.lastName}`
}


const movies = [
    {
        title:'Amadeus',
        score:99,
        year:1984
    },
    {
        title:'Sharknado',
        score:35,
        year:2013
    },
    {
        title:'13 Going on 30',
        score:70,
        year:2003
    },
    {
        title:'Kutty',
        score:99,
        year:2084
    },
]

//movies.filter((movie)=> movie.score >= 90)
//movies.filter((score)=> score >= 90)



///movies.map(movie => {
   // return `${movie.title}.(${movie.year}) is rated ${movie.score}`
//})




movies.map(({title,score,year}) => {
    return `${title}.(${year}) is rated ${score}`
})
