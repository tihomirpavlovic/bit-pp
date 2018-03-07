//1. Write a function that capitalizes the first letter of each string argument it receives.  

function capitalize(...args) {

    let b = args.filter(function (e)
      {
        return typeof e == "string";
        
    });

    b.forEach(function(e,i){

        b[i] = e[0].toUpperCase() + e.substring(1);

    });
    return b;
    
}

// console.log(capitalize("hello", "there", "ES", 6));

//2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 

const tax = 20;

function taxCalculator(ourNumber) {

    return ourNumber/100*tax;
}

//console.log(taxCalculator(100));

//3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1. 

var array1 =  [4, 6, 11, -9, 2.1];

function arrayIncreaser(arr, n){
    var increasedArr = arr.map(function (num) {
        return num + n;
    })

    return increasedArr;
}

//console.log(arrayIncreaser(array1,2));

//4. Write a function that filters all even elements of the array.

var arr2 =  [6, 11, 9, 0, 3];

function filterEven(arr){
    var filteredArr = arr.filter(function(x){
        return x % 2 == 0;
    })
    return filteredArr;
}

//console.log(filterEven(arr2));

//5. Write a function that filters all the strings from the given array that contain substring JS or js.
var arr3 = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

function filterJs (arr){
    var filteredArr1 = arr.filter(function(e){
        
        return e.includes("JS") || e.includes("js");

    });

    return filteredArr1;
}

//console.log(filterJs(arr3));

//6. Write a function that filters all integer numbers from the given array. 
var arr4 = [1.6, 11.34, 9.23, 7, 3.11, 8];
function integerFinder(arr){
    var filterInteger = arr.filter(function(e){

        return Number.isInteger(e);

    })

    return filterInteger;
}

//console.log(integerFinder(arr4));

//7. Write a function that filters all integer arguments that contain digit 5.

function integerFilter(...args){

    var filterInteger1 = args.filter(function(e){

        return Number.isInteger(e) && e.toString().includes("5");

    });

    return filterInteger1;
}

//console.log(integerFilter(23, 11.5, 9, 'abc', 45, 28, 553));

//8. Write a function that returns indexes of the elements greater than 10. 
var arr9 = [1.6, 11.34, 29.23, 7, 3.11, 18]
function biggerThanTen(arr) {
    var filteredIndex = arr.map(function(e,i) {
        if(e > 10) {
            return i;
        }
    });

    var newArr = filteredIndex.filter(function(e){
            return Number.isInteger(e);
    })

    return newArr;
}

console.log(biggerThanTen(arr9));

    













