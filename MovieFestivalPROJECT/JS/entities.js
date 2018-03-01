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

