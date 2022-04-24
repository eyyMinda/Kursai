const tbody = document.getElementById('tBody');
const over18 = document.getElementById('btnOver18');
const males = document.getElementById('btnMales');
const females = document.getElementById('btnFemales');
const filterInput = document.getElementById('filterInput');

let keys = Object.keys(characters[0]);

/////////////////\\\\\\\\\\\\\

const charOver18 = characters.filter((char) => char.age > 18);
console.log(charOver18);
const charMale = characters.filter((char) => char.gender === 'male');
console.log(charMale);
const charFemale = characters.filter((char) => char.gender === 'female');
console.log(charFemale);

// const charGenderRatio = Number(charMale) / Number(charFemale);
// console.log(charGenderRatio)

/////////////////\\\\\\\\\\\\\

function renderTbodyData(param) {
    tbody.innerHTML = '';
    (param).map((char) => {
        const rowEl = document.createElement('tr');
        for (let key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = char[key];

            rowEl.appendChild(dataCell);
        };
        tbody.appendChild(rowEl);
    })
}
over18.onclick = () => renderTbodyData(charOver18);
males.onclick = () => renderTbodyData(charMale);
females.onclick = () => renderTbodyData(charFemale);

/////////////\\\\\\\\\\\\\\\\

function getAllFirstNames() {
    console.log(characters.map((char) => char.firstName.split('')[0]));
}


////////////\\\\\\\\\\\\\\\\\

const sumNameChars = () =>
    characters.reduce((prev, curr) => prev + curr.firstName.length, 0);

const sumLastNameChars = () =>
    characters.reduce((prev, curr) => prev + curr.lastName.length, 0);

const compare = () =>
    characters.reduce((prev, curr) => prev + curr.lastName.length, 0);

function sumAge(param) {
    return characters
        .map((char) => Number(char[param]))
        .reduce((a, b) => a + b);
}

/////////////////.Some\\\\\\\\\\\\\

// const someMales = characters.some((char) => char.gender === 'female' && char.age > 20)
// console.log(someMales);
// const someNationalities = characters.some((char) => char.age < 18 && char.nationality === 'american');
// console.log(someNationalities);

/////////////////Sort??\\\\\\\\\\\\\

// characters.sort(function (a, b) {
//     return a.value - b.value;
// });
// characters.sort(function(a, b) {
//     const nameA = a.name; // ignore upper and lowercase
//     const nameB = b.name; // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });


/////////////////\\\\\\\\\\\\\


function buildRow() {

    const sumRowEl = document.createElement('tr');

    for (let key of keys) {
        const dataCellEl = document.createElement('td');
        if (key === 'age') {
            dataCellEl.textContent = sumAge(key)
        }
        if (key === 'firstName') {
            dataCellEl.textContent = sumNameChars();
        }
        if (key === 'lastName') {
            dataCellEl.textContent = sumLastNameChars();
        }
        sumRowEl.appendChild(dataCellEl);
    }
    tbody.appendChild(sumRowEl);
}
renderTbodyData(characters);
buildRow();
getAllFirstNames();