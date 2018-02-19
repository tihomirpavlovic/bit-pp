//--------------------------------1
var duplicate = function (arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[2 * i] = arr[i];
        newarr[2 * i + 1] = arr[i];


    } return newarr;

}

console.log(duplicate([2, 4, 7, 11, -2, 1]));

//---------------------------------2


// var removeDuplicate = function (arr) {
//     var newarr = [];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[0] == arr[i]) {delete arr[i]}
//     }
//          return arr

// }

// console.log(removeDuplicate([8,13,8,9,12,8,1,1,4,13]));



var removeDuplicate = function (arr) {
    var newarr = [];

    for (var j = 0; j < arr.length; j++) {
        for (var i = j + 1; i < arr.length; i++) {

            if (arr[j] === arr[i]) {
                arr.splice(i, 1);
            }
        }
    }

    return arr;
}

console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));



//-----------------------------------3a

var odd = function (arr) {
    if (arr.length % 2 !== 0) {
        return "true"
    } else {
        return "false"
    }

}

console.log(odd([2, 3, 3, 3, 5]));


//---------------------------------3b

var countLessThenMiddle = function (arr) {
    var count = 0;

    if (arr.length % 2 == 0) {
        return "ERROR";
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[(arr.length - 1) / 2]) {
                count += 1;

            }
        }


    } return count;


}

console.log(countLessThenMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


//-----------------------------------4


var returnSmallestAndPosition = function (arr) {
    var small = arr[0];
    var position = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] <= small) {
            small = arr[i]
            position = i + 1
        }

    }
    var object = {
        broj: small,
        pozicija: position
    }

    return object
}
console.log(returnSmallestAndPosition([9, -16, 5, -11, 4, 3, 2, 1]));


//------------------------------5a

var lessThanGiven = function (arr, a) {
    var newarr = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a) {
            newarr.push(arr[i])
        }

    } return newarr


}

// console.log(lessThanGiven([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));


// //------------------------------------------5b


// var substringFinder = function (arr) {
//     var newarr = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase().indexOf("pro") == 0) {
//             newarr.push(arr[i])

//         }
//     } return newarr
// }

// console.log(substringFinder(["profesionalac", "Programer", "decak"]));

//--------------------------5c

var filterCallBack = function (arr, f()) {

    return f();



}

console.log(filterCallBack([1, 2, 3, 4, 5, 6, 7, 8, 9]), lessThanGiven(6));


