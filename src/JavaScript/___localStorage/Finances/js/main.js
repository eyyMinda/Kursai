const tbody = document.getElementById('tbody')
const inputName = document.getElementById('inputName')
const inputAmount = document.getElementById('inputAmount')
const submitBtn = document.getElementById('submit')

let ind = 0;  //index of entry
let list = [{
    'number': '',
    'name': 'John Doe',
    'amount': '0',
    'dateadded': '',
    'time': '',
    'editBtn': '',
    'delBtn': ''
},];
getLocal()
let keys = Object.keys(list[ind])
//Sum and Pages
let sumVisible, sumTotal, pages, startIndex, endIndex;
let page = 1
let limit = 10
//Visible list
let visible = [];

renderTable(list)
function nextPage() { page++; if (page > pages) page = pages; renderTable(list) }
function prevPage() { page--; if (page < 1) page = 1; renderTable(list) }
function decidePage(){
    pages = parseInt(list.length / limit) + 1;
    startIndex = (Number(page) - 1) * Number(limit)
    endIndex = Number(page) * Number(limit)
}

function renderTable(entries) {
    getLocal()
    decidePage()
    tbody.innerHTML = '';
    if(visible != entries){
        entries = entries.slice(Number(startIndex), Number(endIndex))
    }
    visible = []
    entries.every((user, i) => {
        user.number = i + 1
        let n, am;
        n = user.name
        am = user.amount

        tbody.innerHTML += `<tr id='entry${i}'>
            <th>${user.number}</th>
            <td>${user.name}</td>
            <td>${user.amount}</td>
            <td>${user.dateadded}</td>
            <td>${user.time}</td>
            <td><button class='btn bg-primary' onclick="editUser('${n}',' ${am}',' ${i}')" id='editEntry'>Edit</button></td>
            <td class='text-center'><button class='btn bg-danger' onclick="deleteUser('${i}')">Remove</button></td>
            </tr>`
            visible.push(user)
        return true;
    });
    sumVisible = visible.reduce((a, b) => Number(a) + Number(b.amount), 0)
    sumTotal = list.reduce((a, b) => Number(a) + Number(b.amount), 0)
    renderTotal()
}

function renderTotal() {
    const RowEl = document.createElement('tr');

    for (let key of keys) {
        const cellEl = document.createElement('td'); cellEl.classList.add('bg-light');
        switch (key) {
            case 'number': cellEl.textContent = page + '/' + pages; break;
            case 'amount': cellEl.textContent = sumVisible; break;
            case 'delBtn': cellEl.textContent = 'Total: ' + sumTotal; cellEl.classList.add('fw-bold'); break;
        }
        RowEl.appendChild(cellEl);
    }
    tbody.appendChild(RowEl);
}