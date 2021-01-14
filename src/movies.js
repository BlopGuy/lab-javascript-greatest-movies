// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = ((movieArray) => {
    return movieArray.map( (movie) => {
        return movie.director;
    });

});
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = ((movieArray) => {
    if(movieArray.length === 0) {
        return 0;
    };
    
    let numbOfMovies = movieArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");

    });

    return numbOfMovies.length;
});

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = ((movieArray) => {
    if(movieArray.length === 0) {
        return 0;
    }
    let rateAvg = parseFloat((movieArray.reduce((accumulator, currentValue) => {
        if(currentValue.rate !== undefined) {
            return accumulator + currentValue.rate;
        } else {
            return accumulator;
        }
    }, 0)/movieArray.length).toFixed(2));

    return rateAvg;

});

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = ((movieArray) => {
    let dramaMovieNumber = 0;

    let rateDramaAvg = parseFloat((movieArray.reduce((accumulator, currentValue) => {
        if(currentValue.genre.includes("Drama")) {
            dramaMovieNumber++;
            return accumulator + currentValue.rate;
        } else {
            return accumulator;
        }
    }, 0)/dramaMovieNumber).toFixed(2));

    if(dramaMovieNumber === 0) {
        return dramaMovieNumber;
    } else {
        return rateDramaAvg;
    }
});

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
