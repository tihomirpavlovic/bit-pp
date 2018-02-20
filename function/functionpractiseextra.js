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


var substringFinder = function (arr) {
    var newarr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().indexOf("pro") == 0) {
            newarr.push(arr[i])

        }
    } return newarr
}

console.log(substringFinder(["profesionalac", "Programer", "decak"]));

//--------------------------5c    Nije zavrsen jer jos nismo ucili callback zatvorenja

var filterCallBack = function (arr, f) {

    return f(arr, a);



}

console.log(filterCallBack([1, 2, 3, 4, 5, 6, 7, 8, 9]), lessThanGiven, 6);


//---------------------------6a+b

var goods = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
]

var totalPrice = function (goods) {
    var total = 0;
    for (var i = 0; i < goods.length; i++) {
        total = total + goods[i].price
    } return total
}

console.log(totalPrice(goods));

//-------------------------6c

var goods = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
]

var averagePrice = function (goods) {
    var total = 0;
    for (var i = 0; i < goods.length; i++) {
        total = total + goods[i].price / goods.length
    } return total.toFixed(3)
}

console.log(averagePrice(goods));

//-----------------------------6d


var goods = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
]

var averagePrice = function (goods) {
    var max = goods[0].price;
    var name = ""
    for (var i = 0; i < goods.length; i++) {
        if (goods[i].price > max) {
            max = goods[i].price
            name = goods[i].name
        }

    } return name.toUpperCase();
}
console.log(averagePrice(goods));

//---------------------------------7a

var capitalCheck = function (str) {
    if (str == str.toUpperCase()) {
        return true;
    } else {
        return false
    }
}
console.log(capitalCheck("BEOGRAD"));

//-------------------------------------8

var fromBirthday = function (birthday) {
    var birth = new Date(birthday);
    var today = new Date()
    return ((birth - today) / 86400000).toFixed(0);
}
console.log(fromBirthday('March 3, 2018'));

//------------------------------9

var travelTime = function (start, end) {
    var start = new Date(start);
    var end = new Date(end);
    var tempDate = new Date(end-start);
    console.log(tempDate.getUTCHours(), tempDate.getMinutes(), tempDate.getSeconds());
    var temp = ((end - start) / 1000).toFixed(0);
   
    var hour = parseInt(temp / 3600);
    var minutes = parseInt((temp - (hour * 3600)) / 60);
    var second = temp - (minutes * 60) - hour * 3600
    return (hour + " hours " + minutes + " minutes " + second + " seconds")
}
console.log(travelTime('December 17, 1995 03:24:00', "December 17, 1995 15:23:54"));

//--------------------------10

function PointsInSpace(x, y, z) {
    this.x = x, 
    this.y = y,
    this.z = z
}

var point1 = new PointsInSpace(4, 3, 2);
var point2 = new PointsInSpace(4, 2, 1);

var distanceBetweenPoints = function (point1, point2){
    var distance;

    distance = Math.sqrt((point2.x-point1.x)*(point2.x-point1.x)+(point2.y-point1.y)*(point2.y-point1.y)+(point2.z-point1.z)*(point2.z-point1.z))

    return distance;
}

console.log(distanceBetweenPoints(point1, point2));

//-----------------------10

function PointsInSpace(x, y, z) {
    this.x = x, 
    this.y = y,
    this.z = z
}

var point1 = new PointsInSpace(4, 3, 2);
var point2 = new PointsInSpace(4, 2, 1);

var distanceBetweenPoints = function (point1, point2){
    var distance;

    distance = Math.sqrt(Math.pow((point2.x-point1.x),2)+Math.pow((point2.y-point1.y),2)+Math.pow((point2.z-point1.z),2))

    return distance;
}

console.log(distanceBetweenPoints(point1, point2));
