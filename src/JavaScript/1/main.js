//const Not able to redefine
//var Old syntax, stop using this wtf
let a, b, c; //Able to redefine

a = "String"; //Name
b = 199.4444; //Length
c = true; //Boolean true/false

let q, w, e, r;

q = 44;
w = q - 42;
e = q + w;
r = e / 3;
d = [q, w, e, r]; //Must be below definitions or else will be undefined
console.log(q, w, e)

console.log(d[0], d[1], d[2], d[3]) //Array Display in order of your selection

if (r == 23) {
    console.log(r);
}
else if (r == 15) {
    console.log("r is not correct")
}
else if (r != 23) {
    console.log("r is undefined")
}
// console.log(a, b, c)

const inputElement = document.getElementById("inrasymas");

function CheckInput() {
    const inputValue = inputElement.value; //inputElement.value is a string
    const inputValueToNumber = Number(inputValue); //string of value is changed to a number
    if (inputValueToNumber == 20) {
        alert("Congratulations!! You got the right answer!! Congratulations!!");
    }
    else if (inputValueToNumber < 2) {
        console.log(inputValueToNumber, "Something went wrong?????");
    }
    else if (inputValueToNumber == 2) {
        console.log(inputValueToNumber, "sėsk du");
    }
    else if (inputValueToNumber > 20) {
        console.log(inputValueToNumber, "Less");
    }
    else if (inputValueToNumber < 20 && inputValueToNumber > 2) {
        console.log(inputValueToNumber, "More");
    }
}