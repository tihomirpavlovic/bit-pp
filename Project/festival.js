(function () {
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var code = this.name.slice(0, 1).toUpperCase() + this.name.slice(-1).toUpperCase()
            return code;
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length; //length -- movieLength
        this.getData = function () {
            return this.title + ", " + this.length + ", " + this.genre.getData();
        }

    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = function () {
            return this.listOfMovies.length;
        }
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
        }
        this.allMovieLength = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                sum += this.listOfMovies[i].length;
            }
            return sum;
        }
        this.getData = function () {
            var dataFormat = this.date.getDate() + "." + (1 + this.date.getMonth()) + "." + this.date.getFullYear();
            var allMoviesInfo = dataFormat + ", program duration " + this.allMovieLength() + "\n";
            for (var i = 0; i < this.listOfMovies.length; i++) {
                allMoviesInfo += this.listOfMovies[i].getData() + "\n";
            }
            return allMoviesInfo;
        }

    }

    function Festival(festivalName) {

        this.festivalName = festivalName;
        this.listOfPrograms = [];
        this.numberOfAllMovies = function () {
            var allMovies = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                allMovies += this.listOfPrograms[i].totalNumberOfMovies();
            }
            return allMovies;
        }
        this.addProgram = function (program) {
            return this.listOfPrograms.push(program);
        }

        this.getData = function () {

            var festivalInfo = this.festivalName + " festival has " + this.numberOfAllMovies() + " movie titles " + "\n";
            for (var i = 0; i < this.listOfPrograms.length; i++) {
               festivalInfo += this.listOfPrograms[i].getData() + "\n";
            }
            return festivalInfo;

        }
    }

    function createMovie(title, genre, length) {
        var objGenre = new Genre(genre);
        var newMovie = new Movie(title, objGenre, length);
        return newMovie; 

    }

    function createProgram(date){
        var newProgram = new Program(date);
        return newProgram;
    }

    var bit = new Festival("BIT")

    var monday = createProgram("2018 02 02");
    var sunday = createProgram("2018 03 03");

    var django = createMovie("Django", "Action", 120);
    var spiderman = createMovie("Spiderman", "Action", 160);
    var superman = createMovie("Superman", "Comedy", 170);
    var titanic = createMovie("Titanic", "Drama", 200);

    monday.addMovie(django);
    monday.addMovie(spiderman);
    sunday.addMovie(superman);
    sunday.addMovie(titanic);

    bit.addProgram(monday);
    bit.addProgram(sunday);

    console.log(bit.getData());
    

}
)();


