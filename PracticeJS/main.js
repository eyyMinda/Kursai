/////////////1 and 2\\\\\\\\\\\\
let string = 'firstString';
let number = 5;
let boolean = true;
let arrayStrings = ['Yes', 'Or', 'No'];
let objects =
    [{
        name: 'Donkey',
        age: '20',
        gender: 'male',
    },
        // {
        //     name: 'Snake',
        //     age: '25',
        //     gender: 'female',
        // },
        // {
        //     name: 'Giraffe',
        //     age: '18',
        //     gender: 'female',
        // },
    ];
// /////////////3\\\\\\\\\\\\
// console.log('Hello world');
// /////////////4\\\\\\\\\\\\
// console.log(string);
// /////////////5 and 6\\\\\\\\\\\\
// function printNumber() {
//     if (true) {
//         console.log(number);
//     } else {
//         console.log(string);
//     }
// }
// printNumber();
// /////////////7 and 8\\\\\\\\\\\\
// function printArray() {
//     return array[2];
// }
// console.log(printArray());
// /////////////9\\\\\\\\\\\\
// console.log(array.push('Maybe'));
// /////////////10\\\\\\\\\\\\
// console.log(array.slice(1, 4));
// /////////////11\\\\\\\\\\\\
// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }
// /////////////12\\\\\\\\\\\\
// console.log(arrayStrings.map((num, i) => num = i));
// /////////////13\\\\\\\\\\\\
// let arrayNums = [200, 40, 15, 3, 2, 8, -600]
// let evens = arrayNums.filter(function (x) {
//     if (x % 2 === 0 || x === 0) {
//         return x;
//     }
// })
// console.log(evens);
// /////////////14\\\\\\\\\\\\
// function myChoice(param) {
//     console.log(param)
// }
// myChoice(6);
/////////////15, 16 and 17\\\\\\\\\\\\
// let array = [6, 2, 4, 8, 9];
// let Nums = [5, 4, 6, 8, 1];

// function arraySum(param) {
//     return sum = param.reduce((b, a) => b + a, 0);
// }
// console.log(arraySum(array)); //29 or 24
/////////////18\\\\\\\\\\\\
// objects.map((object) =>{
//     console.table(object)
// }) 
// let keys = Object.keys(objects[0]);
// console.table(keys)
// let values = Object.values(objects);
// values.map((value) => {
//     console.table(value);
// })
/////////////19\\\\\\\\\\\\
// console.log(Object(objects[0]));
///////////20 and 21\\\\\\\\\\\\\
// let { name, age, gender, height = 180, noob = true } = object; //no work? //Alternative
// Object.assign(object, {height: 180, noob: true}) //Alternative

let objs = [];
objects.map((object) => {
    object.height = 180;   //20
    object.noob = true;     //20
    for (i = 0; i < 5; i++) {  //21
        objs.push(object)          //21
        // console.table(objs)
    }
})
/////////////22\\\\\\\\\\\\\
function get21st() {
    console.table(objs)
}
/////////////23 and ...rest\\\\\\\\\\\\\
const input = document.getElementById('inputForConsole');
const content = document.getElementById('inputValues');
let list = [];
function inputLog() {
    let hasValue = input.value && !list.includes(input.value); //27
    if (hasValue) {
        console.log(input.value);  //23
        list.push(input.value);  //...rest = 24
        content.innerHTML = '';
        updateLog();
    } else {
        alert('You have entered the same value or it is empty')
    }
}
function updateLog() {
    for (let i = 0; i < list.length; i++) {
        content.innerHTML += `<li>${list[i]}</li>`
        // const listEl = document.createElement('p');  //Alternative
        // listEl.textContent = list[i];
        // content.appendChild(listEl);
    }

}
/////////////25\\\\\\\\\\\\\ nieko nesupratau
/////////////26\\\\\\\\\\\\\ nieko nesupratau
