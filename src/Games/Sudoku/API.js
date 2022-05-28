//https://github.com/bertoort/sugoku ***api docs

let newBoard = []
function getNewBoard() {
    fetch('https://sugoku.herokuapp.com/board?difficulty=easy').then(response => response.json())
        .then(data => {
            setTimeout(() => {
                newBoard = data.board
                board = data.board
                renderGame()
            }, 1)
        })
}

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

const encodeParams = (params) =>
    Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');

setTimeout(() => {
    const data = { board: newBoard }

    fetch('https://sugoku.herokuapp.com/solve', {
        method: 'POST',
        body: encodeParams(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
        .then(response => response.json())
        .then(response => {
            solved = response.solution
            console.log(solved)
        })
        .catch(console.warn)
}, 200)