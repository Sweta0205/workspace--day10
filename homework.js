let myName = "sweta";    //   /* EXERCISE 1   EXERCISE A
console.log(myName);

let sum; //EXERCISE B
let a;
let b;
function add(a, b) {
    sum = a + b;
    return sum;

}
add(2, 3)
console.log(sum)

let random; //EXERCISE c
let count = 0;
for (var j = 0; j < Math.floor(Math.random() * 20); j++) {

    count++;
}
console.log(j)


let me = {    //EXERCISE d
    firstName: "sweta",
    lastName: "sriramadasu",
    age: 27,
    skills: [],

};
console.log(me)

delete me.age  //EXERCISE E
console.log(me)
let skillslist = ['java', 'html', 'javascript']; //EXERCISE F
me.skills = skillslist;
console.log(me)
me.skills.splice(2, 1)
console.log(me)

let x; // EXERCISE 2
let y;
let big;
function whoIsBigger(x, y) {

    if (x > y) {
        big = x
        return x

    } else {
        big = y
        return y
    }

}
whoIsBigger(3, 5)
console.log(big)

const myString = ("I love coding") /* EXERCISE 3 */
const splits = myString.split(' ', 3)
console.log(splits)

res = "";
boolean = "";

function deleteone(name, boolean)  /* EXERCISE 4 */ {
    if (boolean == true) {
        let res = name.substring(1);
        return res;

    }

    else (boolean == false)
    {

        var res1 = name.slice(0, -1);
        return res1;
    }
}



console.log(deleteone("sweta", true))

function onlyLetters(surnames) /* EXERCISE 5 */ {

    let onlyLetters = surnames.replace(/\d/g, "")
    return onlyLetters
}
console.log('"' + onlyLetters("I have 4 dogs") + '"')



function isThisAnEmail(string) /* EXERCISE 6 */ {
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    return regexExp.test(string);
}
console.log(isThisAnEmail("swethasriramdas23@gmail.com"))
console.log(isThisAnEmail("swethasriramdas231111@gmail.com"))


function whatDayIsIt() {
    let date = new Date();
    let dayOfWeekNumber = date.getDay();
    let nameOfDay;
    let quote;
    switch (dayOfWeekNumber) {
        case 0:
            nameOfDay = 'Sunday';
            quote = 'Time to chillax!';
            console.log(nameOfDay)

            break;
        case 1:
            nameOfDay = 'Monday';
            quote = 'Monday morning blues!';
            console.log(nameOfDay)
            break;
        case 2:
            nameOfDay = 'Tuesday';
            console.log(tuesday);
            break;
        case 3:
            nameOfDay = 'Wednesday';
            quote = 'Two more days to the weekend.';
            console.log(nameOfDay)
            break;
        case 4:
            nameOfDay = 'Thursday';
            quote = 'The weekend is almost here...';
            console.log(nameOfDay)
            break;
        case 5:
            nameOfDay = 'Friday';
            quote = 'Weekend is here!';
            console.log(nameOfDay)
            break;


        case 6:
            nameOfDay = 'Saturday';
            quote = 'Time to party!';
            console.log(nameOfDay)
            break;


    }
}

whatDayIsIt()

function randomNumber(min, max) //EXERCISE 8

{
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNumber(1, 6))
function rollTheDices(number) {
    let sum = 0;
    let myarr = [];
    for (let i = 0; i < number; i++) {
        let result = randomNumber(1, 6)

        sum = sum + result
        myarr.push(result);



    }
    console.log(myarr);
    console.log(sum)

}
console.log(rollTheDices(3))





function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

console.log(getNumberOfDays("2/1/2021", "3/1/2021"));



function isTodayMyBirthday() {
    var date1 = new Date('may 2 ');
    var date2 = new Date('may 2 ');
    if (date1.getTime() === date2.getTime()) {
        console.log("today is my birthday")
    }

    else {
        console.log("today is not my birthday")

    }
}
isTodayMyBirthday()

const movies = [

    {

        Title: "The Lord of the Rings: The Fellowship of the Ring",

        Year: "2001",

        imdbID: "tt0120737",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },

    {

        Title: "The Lord of the Rings: The Return of the King",

        Year: "2003",

        imdbID: "tt0167260",

        Type: "movie",
        Poster:

            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

        Title: "The Lord of the Rings: The Two Towers",

        Year: "2002",

        imdbID: "tt0167261",

        Type: "movie",
        Poster:

            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

        Title: "Lord of War",

        Year: "2005",

        imdbID: "tt0399295",

        Type: "movie",
        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

        Title: "Lords of Dogtown",

        Year: "2005",
        imdbID: "tt0355702",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

        Title: "The Lord of the Rings",
        Year: "1978",

        imdbID: "tt0077869",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },
    {

        Title: "Lord of the Flies",

        Year: "1990",

        imdbID: "tt0100054",

        Type: "movie",

        Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

        Title: "The Lords of Salem",

        Year: "2012",

        imdbID: "tt1731697",

        Type: "movie",
        Poster:

            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

        Year: "1984",

        imdbID: "tt0087365",
        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

        Title: "Lord of the Flies",

        Year: "1963",

        imdbID: "tt0057261",
        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

        Title: "The Avengers",

        Year: "2012",
        imdbID: "tt0848228",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {
        Title: "Avengers: Infinity War",

        Year: "2018",

        imdbID: "tt4154756",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

        Title: "Avengers: Age of Ultron",
        Year: "2015",

        imdbID: "tt2395427",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

        Title: "Avengers: Endgame",
        Year: "2019",

        imdbID: "tt4154796",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

];

var person = {
    firstName: "sweta",
    lastName: "sriramdas",
}
function deleteProp(personObject, itemToBeDeleted) {

    if (itemToBeDeleted == personObject.firstName) {
        delete person.firstName;
    }
    else {
        delete person.firstName;
    }

    console.log(personObject)
}
deleteProp(person, "sweta")


function countMovies() {
    console.log("movie count is " + movies.length)


}
countMovies()


function onlyTheTitles() {
    let myarr = [];

    for (let i = 0; i < movies.length; i++) {
        let result = movies[i].Title
        myarr.push(result)
    }
    console.log(myarr);
}
onlyTheTitles()

function onlyInThisMillennium() {
    let milleniumMovies=[] ;
 
    let currentYear=new Date().getFullYear();
    for (let i = 0; i < movies.length; i++) {
        if(currentYear-movies[i].Year<1000)
        {
            milleniumMovies.push(movies[i].Year)
        }

    }
    console.log("milleniumMovies "+milleniumMovies)

}
onlyInThisMillennium()

function getMovieById(id)
 {
    for (i = 0; i < movies.length; i++) {
        if (movies[i].imdbID === id) {
            console.log(movies[i].Title)
        }
    }
}

getMovieById("tt4154796")



function searchByTitle(str6) {
    for (i = 0; i < movies.length; i++) {
        if (movies[i].Title.includes(str6)) {
            console.log(movies[i].Title)
        }
    }
}

searchByTitle("Avengers")

function sumAllTheYears()
{
let sum2 = 0
    for (i = 0; i < movies.length; i++) 
    {
        let a = parseInt(movies[i].Year)
        sum2 = sum2 + a
    }
    console.log("The sum of all the years in which movies are produced is ", sum2)
}
sumAllTheYears()

function searchAnddivide(str)
{
    
    let results={ matches:[],unmatches:[] }
    for (i = 0; i < movies.length; i++) 
    {
        if (movies[i].Title.toLowerCase().includes(str.toLowerCase()))
         {
            results.matches.push(movies[i].Title)
        }
        else
        {
           results.unmatches.push(movies[i].Title)
        }
    }
    return results
}
console.log(searchAnddivide("avengers"))
