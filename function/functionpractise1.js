
//--------------------------------- saberi sve cifre jednog broja
function sumOfDigits(n) {
    var sum = 0;
    var lastDigit;
    var firstDigit;

    if (typeof n != "number") {
        return -1;
    }

    if (n < 0) {
        n = -n;
    }

    while (n > 0) {
        lastDigit = n % 10;

        n = (n - lastDigit) / 10;

        sum = sum + lastDigit;
    }

    return sum;

}

console.log(sumOfDigits("b"));

//--------------------------------- saberi prvu i poslednju cifru datog broja

function sumOfDigits(n) {
    var sum = 0;
    var lastDigit;
    var digitsArr = [];
    var i = 0;

    if (typeof n != "number") {
        return -1;
    }

    if (n < 0) {
        n = -n;
    }

    while (n > 0) {
        lastDigit = n % 10;

        digitsArr[i] = lastDigit;
        i++;

        n = (n - lastDigit) / 10;
    }

    sum = digitsArr[0] + digitsArr[digitsArr.length - 1];

    return sum;

}

console.log(sumOfDigits(455));

//---------------------------------4

function arithmeticMean(a, b, c, d) {
    var mid = (a + b + c + d) / 4;
    return mid;
}

console.log(arithmeticMean(50, 50, 50, 50))

//---------------------------------6

function chart(a, b, c) {
    var suma = "";
    var sumb = "";
    var sumc = "";
    var s = "*";

    //
    for (i = 0; i < a; i++) {
        // dodajemo po jednu *
        suma += s;

    }
    //*********\n
    suma += "\n";
    for (i = 0; i < b; i++) {
        // dodajemo po jednu *
        sumb += s;

    }
    //*********\n
    sumb += "\n";
    for (i = 0; i < c; i++) {
        // dodajemo po jednu *
        sumc += s;

    }
    //*********\n
    sumc += "\n";



    console.log(suma);
    console.log(sumb);
    console.log(sumc);
}

chart(5, 7, 8);

//---------------------------------9

function sumArr(arr) {
    var sum = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            continue;
        } else {
            sum = sum + arr[i];
        }
    }
    return sum;
}

console.log(sumArr([2, 4, 5, 2, 11]));

//---------------------------------10

function countLetter(string) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "A") {
            count++;
        }
    }
    return count;
}
console.log(countLetter("Ay random string"));

//---------------------------------pre-defined functions

var result = parseInt(true);

console.log(result);

//---------------------------------2

function multiplyArr(arr) {
    var multiplier = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            multiplier[i] = arr[i] * 2;
        } else {
            multiplier[i] = arr[i];
        }
    }

    return multiplier;
}

console.log(multiplyArr([-3, 11, 5, 3.4, -8]))


//---------------------------------4

function firstLarger (arr){
    var min = arr[0];
    var second = arr[0];

    for(var i = 0; i < arr.length ; i++){

        if (arr[i]<arr[0]){
            min = arr[i];
        }
        for(var i = 0; i < arr.length ; i++){
            
            if(arr[i]<second && arr[i]>min){
            second = arr[i];
            
        }
    }
    return second;

}

console.log(firstLarger([4, 2, 2, -1, 6]));

//---------------------------------6



