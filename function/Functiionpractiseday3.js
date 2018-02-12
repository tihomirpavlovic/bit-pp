function sumNumbers(num1, num2) {
    var result = num1 + num2;
    return 10;
 }
 var result = sumNumbers(10, 1);
 console.log(result)

 //--------------------------------

 var x = -32.2;
var isPositive = (x > 0);

if (isPositive) {
   console.log(x + " is positive");
} else {
   console.log(x + " is not positive");
}

 //--------------------------------


var global = 1;
var local = 3;

function myFunc() {
   var local = 2;
   global++;
   return global;
}

console.log(myFunc());

