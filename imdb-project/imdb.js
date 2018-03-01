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

//lista filmova
var allMovies = [];

// 1)procitaj unete podatke

document.querySelector("#button-CM").addEventListener("click", function (event) {

    var movieTitle = document.querySelector("#title").value;
    var movieLength = parseInt(document.querySelector("#length").value);
    var movieGenreSelect = document.querySelector("#genre");
    var movieGenreIndex = movieGenreSelect.selectedIndex;
    var movieGenre = movieGenreSelect.options[movieGenreIndex].value;

    //2) validacija
    var input = document.querySelectorAll("input");

    for (var i = 0; i < input.length; i++) {
        var req = "*required";
        if (input[i].hasAttribute("required") && input[i].value == "") {
            input[i].classList.add("red");
            document.querySelector("#required1").textContent = req;
            return;
        }

    }

    if(movieGenre == "-"){
        document.querySelector("#genre").classList.add("red");
        return;
    }

    //3 napravi objekat koji predstavlja film

    var movie = new Movie(movieTitle, movieLength, movieGenre);

    //4dodajemo film u listyu filmova na nivou aplikacije

    allMovies.push(movie);

    //5 azuriramo interfejs - prikazujemo novi film
    var movieInfo = document.createTextNode(movie.getData());
    var newMovieList = document.createElement("p");
    newMovieList.appendChild(movieInfo);
    document.querySelector("#created-movies").appendChild(newMovieList);

    //6. azuriramo counter
    console.log(movie.movieLengthSum());
    console.log(document.querySelector("#counter"))
    document.querySelector("#counter").textContent = movie.movieLengthSum();

});