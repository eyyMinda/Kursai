const input = document.getElementById('input')
const addItem = document.getElementById('addItem')
const removeItem = document.getElementById('removeItem')
const taskList = document.getElementById('tasksList')
const doneList = document.getElementById('doneList')

class Item {
    constructor({ list, done }) {
        this.tasksList = taskList
        this.doneList = doneList
        this.tasks = [...list]
        this.completed = [...done];
        this.render();
    }
    add(text) {
        this.tasks.push(text);
        this.render();
    }
    remove(text) {
        console.log('starts removing')
        this.new = this.tasks.splice(this.tasks.indexOf(text), 1)
        console.log(this.new)
        console.log('this.tasks old: ', this.tasks)
        this.tasks = this.new
        console.log('this.tasks new: ', this.tasks)
        this.render()
    }
    render() {
        this.tasksList.innerHTML = ''
        this.doneList.innerHTML = ''
        for (let task of this.tasks) {
            tasksList.innerHTML += `<li>${task} <button class="btn btn-danger border p-1" onclick="this.remove('${task}')">Remove</button></li>` //syntax doesnt work for onclick remove('parameter') cause of strick mode :(
        }
        for (let task of this.completed) {
            doneList.innerHTML += `<li><i class="fa-solid fa-check"></i> ${task} <button class="btn btn-danger border p-1" onclick="this.remove('${task}')">Remove</button></li>`
        }
    }
    done() {

    }
}

const test = new Item({ list: ['go-sleep', 'go-work', 'go-home', 'launch-pc', 'sit', 'good boy ;)'], done: ['wake-up'] })
addItem.onclick = () => test.add(input.value)