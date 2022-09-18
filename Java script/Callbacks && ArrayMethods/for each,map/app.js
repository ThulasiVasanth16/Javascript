//const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


//const doubles =numbers.map(function(num){
  //  return num *2;
//})


/*numbers.forEach(function(el){
         console.log(el)
})


for(let el of numbers){
    if(el % 2 === 0) {
    console.log(el);
    }
})
*/


const movies = [
    {
        titile:'kutty',
        score:99
    },
    {
        title:'kvrk',
        score:85
    },
    {
        title:'ukp',
        score: 95
    },
    {
        title:'My Girl Is An Alien',
        score:98
    }
]

//const hello = movies.map(function(movie){
  //   return `${movie.title} -${movie.score/10}`
//})

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)




// const titles = movies.map(function(movie){
  //  return movie.title.toUpperCase() ;
//})
//movies.forEach(function(movie){
  //  console.log(`${movie.title}  - ${movie.score}/100`)
//})
