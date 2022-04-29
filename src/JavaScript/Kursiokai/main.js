const tbody = document.getElementById('tbody');

/////////////////BUTTONS\\\\\\\\\\\\\

const fullList = document.getElementById('btnAll');
const males = document.getElementById('btnMales');
const females = document.getElementById('btnFemales');
const ageLess30 = document.getElementById('btnLessThan30');
const heightMore175 = document.getElementById('btnHeight175');
const skillNot5 = document.getElementById('btnSkillNot5');
const skill5 = document.getElementById('btnSkill5');

/////////////////SELECTED DATA\\\\\\\\\\\\\

fullList.onclick = () => renderTbodyData(usersReset);
males.onclick = () => renderTbodyData(users = usersReset.filter((user) => user.gender === 'male'));
females.onclick = () => renderTbodyData(users = usersReset.filter((user) => user.gender === 'female'));
ageLess30.onclick = () => renderTbodyData(users = usersReset.filter((user) => user.age < 30));
heightMore175.onclick = () => renderTbodyData(users = usersReset.filter((user) => user.height > 175));
skillNot5.onclick = () => renderTbodyData(users = usersReset.filter((user) => user.codingSkill != 5));
skill5.onclick = () => renderTbodyData(users = usersReset.filter((user) => user.codingSkill == 5));

/////////////////BUILD DATA\\\\\\\\\\\\\

let keys = Object.keys(users[0]);

function renderTbodyData(param) {
    tbody.innerHTML = '';

    (param).map((user, i) => {
        const rowEl = document.createElement('tr');
        user.numerics = i + 1

        for (let key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = user[key];
            rowEl.appendChild(dataCell);
        };
        tbody.appendChild(rowEl);
    })
    buildRow();
}

/////////////////BUILD HIGHEST OF[?] DATA ROW\\\\\\\\\\\\\

const maxAge = () => users.reduce((prev, curr) => (prev.age > curr.age) ? prev : curr)
const maxHeight = () => users.reduce((prev, curr) => (prev.height > curr.height) ? prev : curr)
const maxSkill = () => users.reduce((prev, curr) => (prev.codingSkill > curr.codingSkill) ? prev : curr)

function buildRow() {
    const lastRowEl = document.createElement('tr');

    for (let key of keys) {
        const dataCellEl = document.createElement('td');
        switch (key) {
            case 'age': dataCellEl.textContent = maxAge().age; break;
            case 'height': dataCellEl.textContent = maxHeight().height; break;
            case 'codingSkill': dataCellEl.textContent = maxSkill().codingSkill; break;
        }
        lastRowEl.appendChild(dataCellEl);
    }
    tbody.appendChild(lastRowEl);
}

/////////////////INPUTS\\\\\\\\\\\\\

const inputName = document.getElementById('inputName').value;
const inputLastName = document.getElementById('inputLastName').value;
const inputAge = document.getElementById('inputAge').value;
const inputGender = document.getElementById('inputGender').value;
const inputCity = document.getElementById('inputCity').value;
const inputWorkplace = document.getElementById('inputWorkplace').value;
const inputHobby = document.getElementById('inputHobby').value;
const inputHeight = document.getElementById('inputHeight').value;
const inputSkill = document.getElementById('inputSkill').value;

/////////////////ADD TO LIST\\\\\\\\\\\\\
//IF INCLUDES NOT WORKING AND NEED CLEAR INPUTS AFTER ADD

function addToList() {
    let addUser = [
        {
            firstName: inputName,
            lastName: inputLastName,
            age: inputAge,
            gender: inputGender,
            city: inputCity,
            workplace: inputWorkplace,
            hobby: inputHobby,
            height: inputHeight,
            codingSkill: inputSkill,
        },
    ];
    console.log(addUser);
    users.map((user) => {
        if (user == addUser) {
            alert('This User is already in the list')
        } else if (addUser == '') {
            alert('Enter info of the person in order to add to the list')
        } else {
            users.push.apply(users, addUser);
        }
    });
    console.log(users)
    addUser = '';
    renderTbodyData(users);
}

/////////////////SORTING\\\\\\\\\\\\\\
//ONLY SORTS WITH STRING IF ALL NUMBERS ARE IN "" ("20", "10") IF A NUMBER DOES NOT HAVE "" (20, 10) DOES NOT WORK WITH SORT BY ALPH

function sortbyAlph(param) {
    if (param === 'codingSkill') { order = order; } else { order = !order; }
    users.sort(function (a, b) {
        let x = a[param]; //.toLowerCase()
        let y = b[param]; //.toLowerCase()
        if (order) {
            return x == y ? 0 : x > y ? 1 : -1; // if Name is the same as the other one, don't sort // if x(first name) is higher in alphabet -sort //else -1??
        } else {
            return x == y ? 0 : x < y ? 1 : -1;
        }
    });
    renderTbodyData(users);
}

function sortbyNumber(param) {
    if (param === 'codingSkill') {
        sortbyAlph('codingSkill');
    }
    order = !order;
    users.sort(function (a, b) {
        const x = a[param];
        const y = b[param];
        return (order ? x - y : y - x);
    });
    renderTbodyData(users);
}

/////////////////BUILD ON LOAD\\\\\\\\\\\\\

renderTbodyData(users);

/////////////////FETCH FROM API\\\\\\\\\\\\\

// let test = ['drake', 'babe', '2', 'crack'];
// test.map((tes) => {
//     console.log(tes.toLowerCase())
// })



///VERY USEFUL .FOREACH\\\\
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });
///Testing typeof\\\
// let testest = [20, '20', 'babe', 15, "4"]
// testest.map((test) => {
//     let allstrings = (typeof test == 'string')
//     console.log(allstrings)

// });
