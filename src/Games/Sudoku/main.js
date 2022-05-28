let numbers, digits, numSelected;
let wrong = 0;

let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]
let solved = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
let current = [
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------"
]
let wonRows = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const boardField = document.getElementById('board')
const digitsField = document.getElementById('digits')
const faults = document.getElementById('faults')

window.onload = function () { getNewBoard() }


function renderGame() {
    current = board
    digitsField.innerHTML = ''
    boardField.innerHTML = ''
    for (let i = 1; i < 10; i++) {
        let digit = document.createElement('div');
        digit.classList.add('digit');
        digit.textContent = i;
        digit.addEventListener('click', selectNum);
        digitsField.appendChild(digit);
    }
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement('div')
            tile.id = r.toString() + '-' + c.toString();
            tile.classList.add('tile')
            tile.addEventListener('click', selectTile);
            if (r == 2 || r == 5) { tile.classList.add('horizontal-seperation') }
            if (c == 2 || c == 5) { tile.classList.add('vertical-seperation') }
            if (board[r][c] !== '-' && board[r][c] !== 0) {
                tile.textContent = board[r][c]
                tile.classList.add('tile-start')
            }
            current[r][c] = board[r][c]
            boardField.appendChild(tile)
        }
    }
}

function selectNum() {
    if (numSelected != null) {
        numSelected.classList.remove('selected')
    }
    numSelected = this
    numSelected.classList.add('selected')
}

String.prototype.replaceAt = function (index, char) { //Replace a number in a tile \\ Works only if board is an array of strings
    var a = this.split("");
    a[index] = char;
    return a.join("");
}
function selectTile() {
    let a = this.id.split('-');
    if (numSelected) {
        if (this.innerText != '') return
        if (solved[a[0]][a[1]] !== numSelected.textContent) {
            wrong++;
            faults.innerHTML = `Wrong attempts: ${wrong}`;
            return
        }
        this.innerText = numSelected.textContent
        current[a[0]] = current[a[0]].replaceAt(a[1], numSelected.textContent)
    }

    for (let i = 0; i < current.length; i++) {
        if (!current[i].includes('-') && !current[i].includes('0')) wonRows[i] = 0
    }
    console.log(wonRows)
    if (wonRows == [0, 0, 0, 0, 0, 0, 0, 0, 0]) alert('You won')
}
