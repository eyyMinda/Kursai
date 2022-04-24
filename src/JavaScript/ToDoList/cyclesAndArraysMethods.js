// Array methods

const array = [];
// Primitiviausias ciklas
for (let i = 0; i < 10; i++) {
    array.push(Math.random());
}

const filteredArray1 = [];

function filterArray() {
    // Ciklas kuris mum leidzia iskart naudoti reiksme
    for (let number of array) {
        if (number >= 0.5) {
            filteredArray1.push(number)
        }
    }
}

filterArray()
console.log(filteredArray1);

// Dar vienas budas sukti ciklus
array.forEach((value, index) => {
    console.log(value, index)
})

// Geriausias? Budas.
array.map((value, index) => console.log(value, index));

// Filter
// Grazina array su salyga atitikusiais items
const filteredArray = array.filter((number) => number >= 0.5);
console.log(filteredArray);

// Reduce
const reducedArray = filteredArray.reduce((sum, current) => sum + current);
console.log(reducedArray);

// Some grazina ar kazkas egzistuoja pagal salyga
const someArray = filteredArray.some((number) => number >= 0.7)
console.log(someArray);

// While (kol salyga yra true)
let i = 1;

while (i) {
    i++
    console.log(i)
    if (i == 10) {
        break;
    }
}
