const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.getElementById('reset');

let resetBoard;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function userChoice(tile, i) {
    console.log(`clicked on ${i + 1}`);
    if (!tile.innerHTML) {
        if (currentPlayer == 'X') {
            board[i] = currentPlayer + i
            tile.innerHTML = `<i class="fa-solid fa-x"></i>`
            currentPlayer = 'O'
            playerDisplay.textContent = 'O'
        } else {
            board[i] = currentPlayer + i
            tile.innerHTML = `<i class="fa-solid fa-circle-o">O</i>`
            currentPlayer = 'X'
            playerDisplay.textContent = 'X'
        }
        console.log(board)
    }
}
tiles.forEach((tile, i) => {
    tile.addEventListener(('click'), () => userChoice(tile, i))
})
