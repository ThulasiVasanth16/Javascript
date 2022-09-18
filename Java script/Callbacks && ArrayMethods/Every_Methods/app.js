const exams = [80,98,92,78,70,90,89,84,81,77]

exams.every(score => score >= 75)




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




movies.some(movie =>movie.score >90)




function allEvens(arr) {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
}

// Using arrow function
const allEvens = arr => {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
}

// Using implicit return
const allEvens = arr => arr.every(num => num % 2 === 0);