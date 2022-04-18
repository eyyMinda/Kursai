const input = document.getElementById('input');
const Lorem = document.getElementById('Lorem')
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

let textLower = input.value.toLowerCase();
let loremLower = Lorem.textContent.toLowerCase();

function toUpperCase() {
    console.log(input.value.toUpperCase());
}
function checkIfIncludes() {
    return Lorem.textContent.includes(input.value);
}
function makeBold() {
    if (checkIfIncludes()) {
        Lorem.innerHTML = Lorem.textContent.replaceAll(input.value, input.value.bold());
    } else {
        console.log('word not contained');
    }
}
function concatText() {
    console.log(input1.value.concat(" ", input2.value));
}



let vowels = ["a", "e", "i", "o", "u"];
// yourString = Lorem.textContent.toLowerCase();
// result = vowels.every(r => Lorem.textContent.includes(r));
// console.log('result', result);

function checkVowels() {
    let r;
    if (vowels.every(r => Lorem.textContent.includes(r))) {
        Lorem.innerHTML = Lorem.textContent.replaceAll(r, r.bold())
        console.log(checkVowels());
    }
}
// return Lorem.textContent.includes(vowels);
// return
// function checkVowels() {
//     console.log(array());
// }