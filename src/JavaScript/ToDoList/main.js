
const todo = document.getElementById("toDoList");
const done = document.getElementById("doneList");
const inputEl = document.getElementById("inputEl");

let list = ['Get up', 'Kill mood', 'Find new mood', 'Get down'];
let doneList = [];

function addToDo() {
    const value = inputEl.value;
    const isValue0or1 = value != '' && !list.includes(value);
    if (isValue0or1) {
        list.push(inputEl.value);
        inputEl.value = '';
        updateList();
    } else {
        alert('This item already exists or has no name')
    }
}
function updateList() {
    todo.innerHTML = '';
    done.innerHTML = '';

    for (let index = 0; index < list.length; index++) {
        // todo.innerHTML += `<li>${list[index]}</li>` /////Alternative to create inside <li>
        const listEl = document.createElement('li');
        listEl.textContent = list[index];
        listEl.onclick = () => {
            doneList.push(list.splice(index, 1));
            updateList();
        }
        todo.appendChild(listEl);
    }
    for (let index = 0; index < doneList.length; index++) {
        const listEl = document.createElement('li');
        listEl.textContent = list[index];
        listEl.onclick = () => {
            list.push(doneList.splice(index, 1));
            updateList();
        }
        done.appendChild(listEl);
    }
}



// function switchList() {
//     list.some((index, val) => {
//         console.log(index + ' - ' + val);
//     });
// }
// } else {
//     doneList.some((index, val) => {
//         console.log(index + ' - ' + val);
//     });
// }
