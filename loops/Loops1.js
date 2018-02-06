
//zadatak 1
//for (var c = 0; c < 16; c++) {
//    if (c % 2 == 0) {
//        console.log("even")
//    } else
//        console.log("odd")
//}

//zadatak2
//var sum = 0;
//for (var d = 0; d < 1000; d++) {
//    if (d % 3 == 0 && d % 5 == 0) {
//        sum += d;
//    }
//}
//console.log(sum);

//zadatak 3
//var a = [1, 4, 7, 3]

//var n = a.length;
//var sum = 0;
//for (i = 0; i < 4; i = i+1){
//    sum = sum + a[i]
//}
//console.log(sum)

//zadatak 4
//var c = "";
//var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
//var n = x.length;


//for (i = 0; i < n; i++){
//    c = c+x[i]
//}
//console.log(c)

//zadatak: Pronadji min u nizu i prikazi drugi min ukoliko ih ima vise

//var a = [5,3,7,5,85,34,3];
//var min = a[0];
//var position = 0;
//var i
//for (i = 1; i<a.length; i++){
 //   if(a[i] <= min){
//        min = a[i]
//        position = i
//    }
//}
//console.log(min,position)

//nactraj kvadrat gde je n = duzina stranice(broj zvezdica)

var n = 4;
var s = "*";
var arr1 = "";

for(arr1 = 0; arr1 < 4; arr1++){
    if(arr1 == 0 || arr1 == n-1){
        arr1 = line + s;
    }
}
console.log(arr1)










