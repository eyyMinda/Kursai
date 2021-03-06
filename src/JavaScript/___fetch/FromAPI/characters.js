let characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
        homeworld: '',
    },
];

const tableBody = document.getElementById('table');
const keys = Object.keys(characters[0]);

let fetchUrl = 'http://swapi.dev/api/people/';
let previousPage;
let nextPage;
function addCharacters(url) {
    fetch(url).then((response) =>
    response.json().then((data) => {
        characters = data.results;
        previousPage = data.previous;
        nextPage = data.next;
        renderTableData(characters);
    })
    )
}
addCharacters(fetchUrl);

function renderTableData(array) {
    tableBody.innerHTML = ''

    array.map((character) => {
        const rowElement = document.createElement('tr');

        for (let key of keys) {
            const dataCellElement = document.createElement('td');

            if (key === 'homeworld') {
                const buttonEl = document.createElement('button');
                buttonEl.textContent = 'Homeworld';
                buttonEl.onclick = () => getHomeWorld(character[key]);
                buttonEl.classList.add('btn')
                buttonEl.classList.add('bg-danger')
                rowElement.appendChild(buttonEl);
            } else {
                dataCellElement.textContent = character[key];
            }
            rowElement.appendChild(dataCellElement);
        }
        tableBody.appendChild(rowElement);
    })
    buildTotalRow();
}

function getHomeWorld(url) {
    fetch(url).then((response) => {
        response.json().then((data) => { //data is equal to people/fromthisplanet
            renderHomeworldData(data); //Use data for this function
        })
    })
}

const planetListing = document.getElementById('planetListing')

function renderHomeworldData(data) {
    planetListing.innerHTML = '';  //Empty values after function activates
    const keys = ['name', 'population', 'terrain', 'climate', 'gravity']; //Take only these keys

    for (let key of keys) { //generate key values to
        const listEl = document.createElement('li'); //to this
        listEl.textContent = `${key}: ${data[key]}`; //display values like so

        planetListing.appendChild(listEl);  //place in <ul>
    }
}

const getCharacterPropertySum = (property) =>
    characters.reduce((prev, current) => prev + Number(current[property]), 0);
const getCharacterNamesLengthSum = () => characters.reduce((prev, current) => prev + current.name.length, 0);

function buildTotalRow() {
    const rowElement = document.createElement('tr');

    for (let key of keys) {
        const dataCellElement = document.createElement('td');
        dataCellElement.classList.add('fw-bold');
        if (key === 'name') {
            dataCellElement.textContent = `Simboliu suma ${getCharacterNamesLengthSum()}`
        }
        if (key === 'height' || key === 'mass') {
            dataCellElement.textContent = getCharacterPropertySum(key);
        }
        rowElement.appendChild(dataCellElement);
    }
    tableBody.appendChild(rowElement);
}

const sortByNumber = (property) => renderTableData(characters.sort((a, b) => a[property] - b[property]));
const sortByAlphabet = (property) => renderTableData(characters.sort((a, b) => a[property].localeCompare(b[property])));

const charsWeighMore80 = () => characters.filter((character) => character.mass > 80); //Must Be function of filtering in order to filter newly generated items
const charsSmaller180 = () => characters.filter((character) => character.height < 180);
const charsMale = () => characters.filter((character) => character.gender === 'male');
const charsBlueEyes = () => characters.filter((character) => character.eye_color === 'blue');

function addCharacter(character) {
    const nameInput = document.getElementById('name').value;
    const heightInput = document.getElementById('height').value;
    const massInput = document.getElementById('mass').value;
    const eyeColorInput = document.getElementById('eye_color').value;
    const genderInput = document.getElementById('gender').value;
    const newCharacter = {
        name: nameInput,
        height: heightInput,
        mass: massInput,
        eye_color: eyeColorInput,
        gender: genderInput
    }
    characters.push(newCharacter);
    renderTableData(characters);
}
