(function(){

    console.log("hello my little friend");

function Person(name,surname){
    this.name=name;
    this.surname=surname;

    this.getData = function (){
        return this.name + " " + this.surname;
    }
}

function Seat(number, category){

    //arguments = [number, category]
    //arguments[1] 
    //this = {}
    //Seat(12, 'b') OK
    //Seat(12) <---
    //Seat() OK
    //Seat('b') <----

    
    (function(number, category, o){
        if(typeof number == "undefined" && typeof category == "undefined"){
            o.number = parseInt(Math.random() * 90 + 10);
            o.category = "e";
            return; 
        }

        if(typeof number != "undefined" && typeof category != "undefined"){
            o.number = number;
            o.category = category;
            return;
        }

        
        if(typeof number == "number"){
            o.number = number; 
            o.category = "e";
            return;
        }
        
        if(typeof number == "string"){
            o.category = number;
            o.number = parseInt(Math.random() * 90 + 10);
        }
        
    })(number, category, this);

    this.getData = function (){
        return  this.number +", "+ this.category;
    }
}

function Passenger(person, seat){ 
    this.person = person;
    this.seat = seat;

    this.getData = function(){
        return this.seat.getData() +", "+ this.person.getData();
    }
}

function Flight(relation, date){
    this.relation = relation;
    this.date = new Date(date);
    this.passengerList = [];

    this.addPassenger = function(passenger){
        return this.passengerList.push(passenger);
    }

    this.getData = function() {
        var date = this.date.getDate() + "." + (1 + this.date.getMonth()) + "." + this.date.getFullYear();
        var passangerData = date + ", " + this.relation + "\n";
        for (var i = 0; i < this.passengerList.length; i++){
            passangerData += this.passengerList[i].getData() + "\n";
        }
        return passangerData;
    }
}

function Airport(){
    this.listOfFlight = [];
    this.name = "Nikola Tesla";
    this.addFlight = function(flight){

        return this.listOfFlight.push(flight);//?

    }
}

function createFlight(relation, date){
   var createdFlight = new Flight (relation, date);
   return createdFlight;
}

function createPassenger (name, surname, number, category){
   var objPerson = new Person(name, surname);
   var objSeat = new Seat(number, category);
   var createdPassenger = objPerson + objSeat;
    return createdPassenger
}

var pera = new Person("pera", "peric");
var mika = new Person("mika", "mikic");
console.log(pera.getData());


var seet1 = new Seat(12, 'b');
console.log(seet1.getData())

var passenger1 = new Passenger(pera, seet1);
var passenger2 = new Passenger(pera, seet1);
var passenger3 = new Passenger(pera, seet1);
var passenger4 = new Passenger(pera, seet1);
console.log(passenger1.getData());

var berlin = new Flight("Belgrade - Berlin", "2018-02-03");
var newyork = new Flight("Belgrade - New York", "2018-02-03");
var london = new Flight("Belgrade - London", "2018-02-03");

berlin.addPassenger(passenger1);
berlin.addPassenger(passenger2);
berlin.addPassenger(passenger3);
berlin.addPassenger(passenger4);
console.log(berlin.getData())

var airport = new Airport();
airport.addFlight(berlin);
airport.addFlight(newyork);
airport.addFlight(london);
console.log(airport);







    



}
)();