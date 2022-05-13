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
function nextPage() { page++; if (page > pages) page = pages; renderTable(list, page) }
function prevPage() { page--; if (page < 1) page = 1; renderTable(list, page) }

function renderTable(entries) {
    getLocal()
    tbody.innerHTML = '';
    visible = []
    pages = parseInt(list.length / limit) + 1;
    startIndex = (Number(page) - 1) * Number(limit)
    endIndex = Number(page) * Number(limit)

    entries = entries.slice(Number(startIndex), Number(endIndex))
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

submitBtn.addEventListener(('click'), e => {
    e.preventDefault();
    if (!inputName.value) {
        inputName.placeholder = 'Fill out this field!'; inputName.style.borderColor = 'red';
    } else if (!inputAmount.value) {
        inputAmount.placeholder = 'Fill out this field!'; inputAmount.style.borderColor = 'red';
    } else {
        list.push({ 'number': '', 'name': inputName.value, 'amount': inputAmount.value, 'dateadded': date, 'time': time, editBtn: '', delBtn: '' })
        inputName.value = ''
        inputAmount.value = ''
        setLocal()
        getLocal()
        renderTable(list)
    }
})


function setLocal() {
    localStorage.setItem('list', JSON.stringify(list))
}

function getLocal() {
    if (!localStorage.getItem('list') || localStorage.getItem('list') == '[]') {
        console.log('Nothing saved in localStorage')
        setLocal()
    } else {
        list = JSON.parse(localStorage.getItem('list'))
    }
}