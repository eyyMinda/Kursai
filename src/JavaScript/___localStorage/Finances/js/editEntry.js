const table = document.getElementById('table')
const editPop = document.getElementById('editPop')
const editName = document.getElementById('editName')
const editAmount = document.getElementById('editAmount')

function editUser(n, am, i) {
    ind = Number(i)
    let entry = 'entry' + i //<tr> of entry\\For replace

    table.parentNode.insertBefore(editPop, table)
    editPop.style.visibility = 'visible'
    editName.value = n
    editAmount.value = Number(am)
}

function editSubmit() {
    list[ind] = { 'name': editName.value, 'amount': editAmount.value, 'dateadded': date, 'time': time }
    exitEdit()
    setLocal()
}

function exitEdit() {
    document.body.appendChild(editPop)
    editPop.style.visibility = 'hidden'
    renderTable(list)
}

function deleteUser(i) {
    list.splice(i, 1)
    if (i == ind) exitEdit(); list.splice(i, 1) //if deleted item is the one that's being edited
    setLocal()
    getLocal()
    renderTable(list)
}