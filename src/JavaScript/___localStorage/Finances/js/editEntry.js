const table = document.getElementById('table')
const editPop = document.getElementById('editPop')
const editName = document.getElementById('editName')
const editAmount = document.getElementById('editAmount')
const inc = document.getElementById('inc')
const pay = document.getElementById('pay')


function editUser(n, am, t, i) {
    ind = Number(i)
    let entry = 'entry' + i //<tr> of entry\\For replace

    table.parentNode.insertBefore(editPop, table)
    editPop.style.visibility = 'visible'
    editName.value = n
    editAmount.value = Number(am)
    switch (t.split(' ').join('')) { case 'income': inc.checked = true; break; case 'payment': pay.checked = true; break; default: pay.checked = true; }
}

function editSubmit() {
    const editCheck = document.querySelector('input[name="editType"]:checked').value
    console.log(editCheck)
    list[ind] = { 'number': '', 'name': editName.value, 'amount': editAmount.value, 'type': editCheck, 'dateadded': date, 'time': time }
    setLocal()
    exitEdit()
}

function exitEdit() {
    document.body.appendChild(editPop)
    editPop.style.visibility = 'hidden'
    renderTable(list)
}

function deleteUser(i) {
    list.splice(i, 1)
    if (i == ind) exitEdit(); list.splice(i, 1) //if deleted item is the one that's being edited || Let delete index: 0
    setLocal()
    getLocal()
    renderTable(list)
}