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

    // for (const [index] of users.entries()) {
    //     let indexMain = document.createElement('td');
    //     indexMain = index +1;
    //     console.log(index +1);

        (param).map((user) => {
            const rowEl = document.createElement('tr');

            // rowEl.textContent =  indexMain;
            for (let key of keys) {
                const dataCell = document.createElement('td');
                dataCell.textContent = user[key];
                rowEl.appendChild(dataCell);
            };
            tbody.appendChild(rowEl);
        })
    // }
    buildRow();
}


/////////////////BUILD HIGHEST OF[?] DATA ROW\\\\\\\\\\\\\

const maxAge = () => users.reduce((prev, curr) => (prev.age > curr.age) ? prev : curr)
const maxHeight = () => users.reduce((prev, curr) => (prev.height > curr.height) ? prev : curr)
const maxSkill = () => users.reduce((prev, curr) => (prev.codingSkill > curr.codingSkill) ? prev : curr)
//Problem with sorting. If String is between Numbers, togglesorting brakes. Skill switches when toggleSorting by any String. 
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

/////////////////INPUTS\\\\\\\\\\\\\

const inputName = document.getElementById('inputName').value;
const inputLastName = document.getElementById('inputLastName').value;
const inputAge = document.getElementById('inputAge');
const inputGender = document.getElementById('inputGender').value;
const inputHobby = document.getElementById('inputHobby');
const inputHeight = document.getElementById('inputHeight').value;
const inputSkill = document.getElementById('inputSkill').value;

/////////////////ADD TO LIST\\\\\\\\\\\\\
// DOES NOT WORK WITH BUTTONS. CONST TO LET DOES NOT HELP

function addToList() {
    let addUser = [
        {
            firstName: inputName,
            lastName: inputLastName,
            age: inputAge,
            gender: inputGender,
            hobby: inputHobby,
            height: inputHeight,
            codingSkill: inputSkill,
        },
    ];
    console.log(addUser);
    users.push.apply(users, addUser);
    addUser.value = '';
    renderTbodyData(users);
}

/////////////////SORTING\\\\\\\\\\\\\\

function sortbyAlph(param) {
    order = !order;
    users.sort(function (a, b) {
        let x = a[param].toLowerCase();
        let y = b[param].toLowerCase();
        if (order) {
            return x == y ? 0 : x > y ? 1 : -1; // if Name is the same as the other one, don't sort // if x(first name) is higher in alphabet -sort //else -1??
        } else {
            return x == y ? 0 : x < y ? 1 : -1;
        }
    });
    renderTbodyData(users);
}

function sortbyNumber(param) {
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

