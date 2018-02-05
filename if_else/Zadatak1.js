var p1 = 30;
var p2 = 20;
var p3 = 20;

if (p1 >= p2 && p2 >= p3) {
    console.log(p1 + p2 + 1)
} else if (p1 >= p3 && p3 >= p2) {
    console.log(p1 + p3 + 1)
}else if (p2 >= p1 && p1 >= p3) {
    console.log(p2 + p1 + 1)
} else if (p2 >= p3 && p3 >= p1) {
    console.log(p2 + p3 + 1)
} else if (p3 >= p1 && p1 >= p2) {
    console.log(p3 + p1 + 1) 
} else if (p3 >= p2 && p2 >= p1) {
    console.log(p3 + p2 + 1)
}
