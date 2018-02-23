(function(){

    console.log("hello my little friend");

function Person(name,surname){
    this.name=name;
    this.surname=surname;
}

var pera = new Person("pera", "peric");

function Seat(number, category){
    this.number=number;
    this.category=category.slice(0,1) ;
}

var s = new Seat(1, 'economy');

function Passenger(p, s){ 

}


var passenger = new Passenger(pera, s);

function Flight(){

}




    



}
)();