const todo = document.getElementById("toDoList");
const done = document.getElementById("doneList");
const inputEl = document.getElementById("inputEl");

let list = [];
let doneList = [];

//Use Button on keyup 'ENTER' for input
inputEl.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        // event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
    }
});

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
    list.sort();
    doneList.sort();

    transferItems(list, doneList, todo);
    transferItems(doneList, list, done);
}

// todo.innerHTML += `<li>${list[i]}</li>` /////Alternative to create inside <li>

function transferItems(from, to, List) { //From is an array with 4 elements, to is an array empty array, List is a div/ul box which is empty.
    for (let i = 0; i < from.length; i++) { //from i = 0, until all of array's length add  1; (Generate items from array from 0 to all items one by one)
        const listEl = document.createElement('li'); //obv
        listEl.textContent = from[i]; //displays all generated indexes set in condition
        listEl.onclick = () => { //starts a function for <li>.onclick
            to.push(from.splice(i, 1)[0]); //ToAnotherArray.push (fromThisArray.cut(take it's index, and remove only it)[??? but must])
            updateList(); //update list when used the function onclick, needed because only in this for function all <li> are displayed. Empty without it
        }
        List.appendChild(listEl); //Finally place all of this function inside a certain list.
    }
}

// const arrayy = [1, 2, 3, 4, 5, 6, 7];
// const wArray = ["asd", "dsa", "bebe"];

// for (let number of wArray) {
//     wArray[number]
//     console.log(number);
// }

let array = [];
for (i = 0; i < 10; i++) {
    array.push(Math.random());
    if (array == 0 || array == 1) {
        break
    }
}

const filteredArray = array.filter((number) => number >= 0.5);
console.log(array);
console.log(filteredArray);