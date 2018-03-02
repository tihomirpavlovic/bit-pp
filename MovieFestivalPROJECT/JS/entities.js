function Movie(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;
    this.getData = function () {
        return this.movieTitle + ", " + this.movieLength + ", " + this.movieGenre;
    }
    this.movieLengthSum = function () {
        var sum = 0;
        for (var i = 0; i < allMovies.length; i++) {
            sum += allMovies[i].movieLength;
        }
        return sum;
    }
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];

    this.getData = function () {
        var dateFormat = this.date.getDate() + "." + (1 + this.date.getMonth()) + "." + this.date.getFullYear();
        return dateFormat + ", TBA";
    }

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }

    this.movieLengthSum = function () {
        var sum = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            sum += this.listOfMovies[i].movieLength;
        }
        return sum;
    }
    
}