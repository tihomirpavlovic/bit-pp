//------------------------------------------------------1

var convertBase = function (val, base) {
    if (typeof (val) == "number") {
        return parseInt(String(val)).toString(base);
    };
}

console.log(convertBase(0377, 10));

//--------------------------------------------------------2



function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

//--------------------------------------3

function returnAlpha(str) {
    return str.split("").sort().join("");
}
console.log(returnAlpha("cdba"));

//-------------------------------------4



//-----------------------------------5



function splitStrReturnArr(str) {
    return str.split("").sort();
};
console.log(splitStrReturnArr("Robin BSingh"));