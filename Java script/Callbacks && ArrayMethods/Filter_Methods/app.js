const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]



numbers.filter(n => {
    return n=== 4
})


numbers.filter(n => {
    return n < 10
})

const movies = [
    {
        titile:'kutty',
        score:99,
        year:2004
    },
    {
        title:'kvrk',
        score:85,
        year:2022
    },
    {
        title:'ukp',
        score: 95,
        year:2015
    },
    {
        title:'My Girl Is An Alien',
        score:98,
        year:2017
    }
]


const goodMovies =movies.filter(movie => {
    return movie.score > 80
})

const goodTitles = goodMovies.map(m => m.title)

const badMovies =movies.filter(m => (m.score < 70))

const recentMovies = movies.filter(m => m.year >2004)



function validUserNames(strArr){
	const filterArr = strArr.filter(function(names) {
	    return names.length < 10;
        });
        return filterArr;
}

// Solution using arrow function
const validUserNames = (strArr) => {
    const filterArr = strArr.filter(names => {
	    return names.length < 10;
        });
        return filterArr;
}

// using implicit return 
const validUserNames = strArr =>  strArr.filter(names => names.length < 10);