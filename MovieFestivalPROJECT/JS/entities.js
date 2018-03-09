class Movie {

    constructor(movieTitle, movieLength, movieGenre){

    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;
    this.getData = function () {
        return `${this.movieTitle} , ${this.movieLength} , ${this.movieGenre}`;
    }
    this.movieLengthSum = function () {
        let sum = 0;
        for (let i = 0; i < allMovies.length; i++) {
            sum += allMovies[i].movieLength;
        }
        return sum;
    }
}
}



class Program {

    constructor(date){

    this.date = new Date(date);
    this.listOfMovies = [];

    this.getData = function () {
        let dateFormat = `${this.date.getDate()} . ${1 + this.date.getMonth()} . ${this.date.getFullYear()}`;
        return dateFormat + ", TBA";
    }

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }

    this.movieLengthSum = function () {
        let sum = 0;
        for (let i = 0; i < this.listOfMovies.length; i++) {
            sum += this.listOfMovies[i].movieLength;
        }
        return sum;
    }
}
    
}





