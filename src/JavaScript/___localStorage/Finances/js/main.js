const tbody = document.getElementById('tbody')
const inputName = document.getElementById('inputName')
const inputAmount = document.getElementById('inputAmount')
const submitBtn = document.getElementById('submit')
const typeBtn = document.getElementById('typeBtn')

let ind = 0;  //index of entry
let list = [{
    'number': '',
    'name': 'John Doe',
    'amount': '420',
    'type': 'payment',
    'dateadded': '',
    'time': '',
    'editBtn': '',
    'delBtn': ''
},];
getLocal()
let keys = Object.keys(list[ind])
//Visible list
let visible = [];
//Sum and Pages
let sumVisible, sumTotal, pages, startIndex, endIndex;
let page = 1; limit = 10; all = 0;

renderTable(list)

function nextPage() { all = 0; page++; if (page > pages) page = pages; renderTable(list) }
function prevPage() { all = 0; page--; if (page < 1) page = 1; renderTable(list) }
function viewAll() { if (!all) { all = 1 } else { all = 0; } renderTable(list) }
function decidePage() {
    pages = parseInt(list.length / limit) + 1;
    startIndex = (Number(page) - 1) * Number(limit)
    endIndex = Number(page) * Number(limit)
}
let payments, incomes
let isWhichType = true;

typeBtn.onclick = () => {
    payments = []
    incomes = []
    list.map((user) => {
        if (isWhichType) {
            if (user.type === 'payment') payments.push(user)
            typeBtn.innerText = 'Show Incomes'
            console.log(payments)
        } else {
            if (user.type === 'income') incomes.push(user)
            typeBtn.innerText = 'Show Payments'
        }
    });
    if (isWhichType) { renderTable(payments); isWhichType = false } else { renderTable(incomes); isWhichType = true }
}

function renderTable(entries) {
    getLocal()
    decidePage()
    tbody.innerHTML = '';
    if (!all) {
        if (visible != entries) {
            entries = entries.slice(Number(startIndex), Number(endIndex))
        }
    }
    visible = []
    entries.every((user, i) => {
        user.number = page === 1 ? i + 1 : i + 1 + (page * limit / 2)
        let am, txtClr;
        am = user.amount
        if (user.type === 'income') {
            txtClr = 'text-success';
            user.amount = Math.abs(user.amount)
        } else {
            txtClr = 'text-danger';
            user.amount = -Math.abs(user.amount)
        }

        tbody.innerHTML += `<tr id='entry${i}'>
            <th>${user.number}</th>
            <td>${user.name}</td>
            <td class='${txtClr}'>${user.amount}</td>
            <td>${user.type}</td>
            <td>${user.dateadded}</td>
            <td>${user.time}</td>
            <td><a href='#editPop'><button class='btn bg-primary' onclick="editUser('${user.name}',' ${user.amount}',' ${user.type}',' ${i}')">Edit</button></a></td>
            <td class='text-center'><button class='btn bg-danger' onclick="deleteUser('${i}')">Remove</button></td>
            </tr>`
        visible.push(user)
        sumTotal = entries.reduce((a, b) => Number(a) + Number(b.amount), 0)
        return true;
    });
    sumVisible = visible.reduce((a, b) => Number(a) + Number(b.amount), 0)
    renderTotal()
}

function renderTotal() {
    const RowEl = document.createElement('tr');

    for (let key of keys) {
        const cellEl = document.createElement('td'); cellEl.classList.add('bg-light');
        switch (key) {
            case 'number': cellEl.textContent = page + '/' + pages; break;
            case 'amount': cellEl.textContent = sumVisible; break;
            case 'delBtn': cellEl.textContent = 'Total: ' + sumTotal; cellEl.classList.add('fw-bold', 'text-center'); break;
            default: cellEl.innerHTML = '<i class="fa-solid fa-barcode"></i>'
        }
        RowEl.appendChild(cellEl);
    }
    tbody.appendChild(RowEl);
}
