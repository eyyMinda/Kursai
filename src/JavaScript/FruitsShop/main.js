console.clear()

const fruitsURL = 'http://www.fruityvice.com/api/fruit/all'
const list = document.getElementById('list')
let fruits;

// let req = new Request(fruitsURL, {
//     method: 'GET',
//     headers: 'Access-Control-Allow-Origin',
//     mode: 'cors'
// })
getFruits()
function getFruits() {
    fetch(fruitsURL, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => console.log(response))
        // .then(data => {
        //     fruits = data
        //     console.log(fruits)
        // });
}
