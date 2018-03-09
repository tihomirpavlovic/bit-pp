

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

    for (let i = 0; i < input.length; i++) {
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
    var newOption = document.createElement("option");
    var movieInfo2 = document.createTextNode(movie.getData());
    newOption.appendChild(movieInfo2);
    document.querySelector("#select-movie").appendChild(newOption);

    //6. azuriramo counter
  
    document.querySelector("#counter").textContent = movie.movieLengthSum();

    movieTitleInput = document.querySelector("#title").value = "";
    movieLengthInput = document.querySelector("#length").value = "";
    movieGenreInput = document.querySelector("#genre").value = "";

}

document.querySelector("#button-CM").addEventListener("click", createMovie);

var listOfPrograms = [];
var idTracker = 1;

function createProgram(){
    // creating program
    var dateInput = document.querySelector("#date").value;
    var program = new Program(dateInput);
    listOfPrograms.push(program);
    var programInfo = document.createTextNode(program.getData());
    var newProgramList= document.createElement("p");
    // var randomNum = Math.random() * 99999;
    newProgramList.setAttribute('data-id', idTracker);
    newProgramList.appendChild(programInfo);
    document.querySelector("#created-program").appendChild(newProgramList);
    
    
    // 
    var newProgramOption = document.createElement("option");
    newProgramOption.setAttribute('data-id', idTracker);
    var programInfoForDropDown = document.createTextNode(program.getData());
    newProgramOption.appendChild(programInfoForDropDown);
    document.querySelector("#select-program").appendChild(newProgramOption);
    
    idTracker++;
}

document.querySelector("#button-CP").addEventListener("click", createProgram);

function addMovieToProgram(){
    var movieFromListIndex = document.querySelector("#select-movie").selectedIndex;
    var movieFromList = document.querySelector("#select-movie").options[movieFromListIndex].value;
    var programFromListIndex = document.querySelector("#select-program").selectedIndex;
    var programFromList = document.querySelector("#select-program").options[programFromListIndex].value;
    var programFromListElement = document.querySelector("#select-program").options[programFromListIndex];
    
    var selectedMovie;
    var selectedProgram;
    
    for (let i = 0; i < allMovies.length; i++) {
        if(allMovies[i].getData() === movieFromList) {
            selectedMovie = allMovies[i];
        }
    }
    
    for (let i = 0; i < listOfPrograms.length; i++){
        if(listOfPrograms[i].getData() === programFromList){
            selectedProgram = listOfPrograms[i];
        }
    }

    selectedProgram.listOfMovies.push(selectedMovie);
    
    var selectedProgramId = programFromListElement.getAttribute('data-id');
    var dataIdElements = document.querySelectorAll("p[data-id]");
    var numOfMovies = selectedProgram.listOfMovies.length;
    var lengthOfProgram = 0;

    for (let i = 0; i < selectedProgram.listOfMovies.length; i++) {
        lengthOfProgram += selectedProgram.listOfMovies[i].movieLength;
    }

    var theParagraph;

    for (let i = 0; i < dataIdElements.length; i++) {
        if(dataIdElements[i].getAttribute("data-id") === selectedProgramId) {
            theParagraph = dataIdElements[i];
        }
    }
    
    theParagraph.textContent = selectedProgram.listOfMovies.length ;
}

document.querySelector("#button-MtoP").addEventListener("click", addMovieToProgram);
