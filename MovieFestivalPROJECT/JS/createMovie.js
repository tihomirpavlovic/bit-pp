

//lista filmova
var allMovies = [];

// 1)procitaj unete podatke

function createMovie(){

    var movieTitleInput = document.querySelector("#title");
    var movieLengthInput = document.querySelector("#length");
    var movieGenreInput = document.querySelector("#genre");

    var movieTitle = movieTitleInput.value;
    var movieLength = parseInt(movieLengthInput.value);
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
  
    document.querySelector("#counter").textContent = movie.movieLengthSum();

    movieTitleInput = document.querySelector("#title").value = "";
    movieLengthInput = document.querySelector("#length").value = "";
    movieGenreInput = document.querySelector("#genre").value = "";

}

document.querySelector("#button-CM").addEventListener("click", createMovie);