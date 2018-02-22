(function () {
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var code = this.name.slice(0, 1).toUpperCase() + this.name.slice(-1).toUpperCase()
            return code;
        }
    }

    var drama = new Genre("Drama");
    var action = new Genre("Action");
    var comedy = new Genre("Comedy");

    function Movie(title, genre, length) {

        this.title = title;
        this.genre = genre;
        this.length = length; //length -- movieLength
        this.getData = function (){
            return this.title + ", " + this.length + ", " + this.genre.getData();
        }

    }

    var django = new Movie("Django", action, 120);
    var americanPie = new Movie("American Pie", comedy, 110);
    var titanic = new Movie("Titanic", drama, 160);

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = function () {
            return this.listOfMovies.length;
        }
        this.addMovie = function(movie){
            this.listOfMovies.push(movie);
        }
        this.getData = function(){
            var dataFormat = this.date.getDate() +"." + (1 + this.date.getMonth()) +"."+ this.date.getFullYear();
            var allMoviesInfo = dataFormat + ", " + this.totalNumberOfMovies() + "\n"; 
            for(var i = 0; i < this.listOfMovies.length; i++){
                allMoviesInfo += this.listOfMovies[i].getData() + "\n";
            }
            return allMoviesInfo;
        }
        
    }

    var monday = new Program("2018 06 11");
    var saturday = new Program("2018 08 18");
    var friday = new Program("2018 03 21");

    monday.addMovie(django);
    monday.addMovie(titanic);
    monday.addMovie(americanPie);

    console.log(monday.getData());
    
    

    function Festival(festivalName) {

        this.festivalName = festivalName;
        this.listOfPrograms = [];
        this.numberOfAllMovies = function () {
            var allMovies = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++){
                allMovies += this.listOfPrograms[i].totalNumberOfMovies();
            }
            return allMovies;
        }
        this.addProgram = function (){
            return this.listOfPrograms.push(program);
        }

        this.getData = function (){
            var festivalInfo = this.festivalName + ", " + this.numberOfAllMovies() + ", " + this.listOfPrograms//add method geData to festival


        }
    }

    var bit = new Festival("BIT");

    bit.addProgram(monday);
    bit.addProgram(saturday);
    bit.addProgram(friday);

    console.log(bit)


    function createMovie(){

    }

}
)();


