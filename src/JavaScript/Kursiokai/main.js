const tbody = document.getElementById('tbody');

/////////////////BUTTONS\\\\\\\\\\\\\

const fullList = document.getElementById('btnAll');
const males = document.getElementById('btnMales');
const females = document.getElementById('btnFemales');
const ageLess30 = document.getElementById('btnLessThan30');
const heightMore175 = document.getElementById('btnHeight175');
const skillNot5 = document.getElementById('btnSkillNot5');
const skill5 = document.getElementById('btnSkill5');

let keys = Object.keys(users[0]);

/////////////////INPUTS\\\\\\\\\\\\\

const inputName = document.getElementById('inputName');
const inputLastName = document.getElementById('inputLastName');
const inputAge = document.getElementById('inputAge');
const inputGender = document.getElementById('inputGender');
const inputHobby = document.getElementById('inputHobby');
const inputHeight = document.getElementById('inputHeight');
const inputSkill = document.getElementById('inputSkill');

/////////////////ADD TO LIST\\\\\\\\\\\\\

function addToList() {
    let addUser = [
        {
            firstName: inputName.value,
            lastName: inputLastName.value,
            age: inputAge.value,
            gender: inputGender.value,
            hobby: inputHobby.value,
            height: inputHeight.value,
            codingSkill: inputSkill.value,
        },
    ];
    console.log(addUser);
    users.push.apply(users, addUser);
    addUser.value = '';
    renderTbodyData(users);
}

// DOES NOT WORK WITH BUTTONS. CONST TO LET DOES NOT HELP

/////////////////SELECTED DATA\\\\\\\\\\\\\

const userMale = users.filter((user) => user.gender === 'male');
const userFemale = users.filter((user) => user.gender === 'female');
const userAge30 = users.filter((user) => user.age < 30);
const userHeight175 = users.filter((user) => user.height > 175);
const userSkillNot5 = users.filter((user) => user.codingSkill != 5);
const userSkill5 = users.filter((user) => user.codingSkill == 5);

/////////////////BUILD DATA\\\\\\\\\\\\\

function renderTbodyData(param) {
    tbody.innerHTML = '';
    (param).map((user) => {
        const rowEl = document.createElement('tr');
        for (let key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = user[key];
            rowEl.appendChild(dataCell);
        };
        tbody.appendChild(rowEl);
    })
    buildRow();
}

fullList.onclick = () => renderTbodyData(users);
males.onclick = () => renderTbodyData(userMale);
females.onclick = () => renderTbodyData(userFemale);
ageLess30.onclick = () => renderTbodyData(userAge30);
heightMore175.onclick = () => renderTbodyData(userHeight175);
skillNot5.onclick = () => renderTbodyData(userSkillNot5);
skill5.onclick = () => renderTbodyData(userSkill5);

/////////////////SORTING\\\\\\\\\\\\\


const sortbyNumber = (param) => renderTbodyData(users.sort((a, b) => b[param] - a[param]));
const sortbyAlph = (param) => renderTbodyData(users.sort((a, b) => a[param].localeCompare(b[param])));

// const sortbyNumber = (param, isAsc) => renderTbodyData(users.sort((a, b) => (a[param] > b[param] ? 1 : -1) * (isAsc ? -1 : 1)));
// return data.sort((a, b) => {
//     return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
// });

/////////////////BUILD HIGHEST OF[?] DATA ROW\\\\\\\\\\\\\

const maxAge = () => users.reduce((prev, curr) => (prev.age > curr.age) ? prev : curr)
const maxHeight = () => users.reduce((prev, curr) => (prev.height > curr.height) ? prev : curr)
const maxSkill = () => users.reduce((prev, curr) => (prev.codingSkill != Number) ? prev : curr)

function buildRow() {
    const lastRowEl = document.createElement('tr');
    for (let key of keys) {
        const dataCellEl = document.createElement('td');
        switch (key) {
            case 'age':
                dataCellEl.textContent = maxAge().age;
                break;
            case 'height':
                dataCellEl.textContent = maxHeight().height;
                break;
            case 'codingSkill':
                dataCellEl.textContent = maxSkill().codingSkill;
                break;
        }
        lastRowEl.appendChild(dataCellEl);
    }
    tbody.appendChild(lastRowEl);
}


/////////////////BUILD ON LOAD\\\\\\\\\\\\\

renderTbodyData(users);
