const myBox = document.getElementById('myBox');
const Box = document.getElementById('Box');
const myRoom = document.getElementById('expand');

const usersUrl = 'https://randomuser.me/api/';
const activityUrl = 'http://www.boredapi.com/api/activity/';
const users100 = '?results=21';
let users;
let me;


function getUsers(type) {
    fetch(usersUrl + users100).then(response => response.json()).then(data => {
        users = data.results;
        me = data.results[20]

        if (type == 'users') {
            renderUsers(users)
        } else if (type == 'feed') {
            renderFeed(users)
        }
        renderMe(me)
        return users;
    });
}

getUsers('users')

///ChatBox
function openChat() { //TINGIU DARYT
    const chatbtn = document.createElement('button')
    chatbtn.classList.add('btn')
    chatbtn.classList.add('bg-primary')
    chatbtn.classList.add('text-danger')
    chatbtn.classList.add('fixed-bottom')
    chatbtn.textContent = 'Open messages'
    Box.appendChild(chatbtn)
    // chatbtn.innerHTML += `
    // <div class="panel panel-default fixed-bottom bg-light text-dark" style="width: 500px; height: 100px">InsidePanel
    //     <div class="panel-body">Test resizable
    //     </div>
    //     <div class="panel-footer bg-primary">Footer</div>
    // </div>`
}
///Search
let input = document.getElementById('searchInput')
let searchField = document.getElementById('searchField')

input.addEventListener('keyup', (e) => {
    const string = e.target.value
    const filteredUsers = users.filter((user) => {
        if (string != '') {
            if (user.name.first.toLowerCase().includes(string) || user.name.last.toLowerCase().includes(string)) {
                return user
            } else { searchField.innerHTML = '' }
        } else { searchField.innerHTML = '' }
    })
    filteredUsers.map(user => {
        personImg = user.picture.thumbnail
        person = user.name.first + ' ' + user.name.last
        searchField.innerHTML += `<li class="list-group-item"><img src='${personImg}'>${person}</li>`

    })
})

//Create an activity room
let joinInterval;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const paramType = urlParams.get('type')
let validTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
let roomType;
if (paramType) {
    if (validTypes.includes(paramType))
        roomType = "https://www.boredapi.com/api/activity?type=" + paramType
}

function roomCreation() {
    myRoom.innerHTML = ''
    myRoom.innerHTML += `
    <form action="./index.html" method="GET">
        <label for="activity-select">Choose a type of activity:</label>
         <select class="bg-dark m-2" name="type" id="activity-select">
            <option value="">--Please choose an option--</option>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">Diy</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
         </select>
        <button type="submit" class="btn bg-info">Create</button>
    </form>`
}

function renderMe(me) {
    myBox.innerHTML = ''
    myBox.innerHTML += `<div class="col border"><img src="${me.picture.large}"><h3>${me.name.first} ${me.name.last}</div>`
    ///RENDER MY ROOM
    if (roomType) {
        myRoom.style.display = 'none'
        console.log('roomType')
        fetch(roomType).then(response => response.json()).then((data) => {
            myBox.innerHTML += `<ul class="border list-group">
                <li class="list-group-item bg-dark text-primary">Activity: <b>${data.activity}</b></li><hr>
                <li class="list-group-item bg-dark text-primary">Activity type: <b>${data.type}</b></li>
                <li class="list-group-item bg-dark text-primary">Participants required: <b>${data.participants}</b></li>
                <li class="list-group-item bg-dark text-primary" id="usersJoined">Participants joined: <hr></li>
                `
            usersJoined = document.getElementById('usersJoined')
            let i = 0;
            joinInterval = setInterval(() => {
                const participant = users[Math.floor(Math.random() * 100)]

                usersJoined.innerHTML += `<li class="list-group-item bg-dark text-primary">
                    <img src="${participant.picture.thumbnail}">
                    ${participant.name.first} ${participant.name.last}
                    </li>`
                i++
                if (i == 4) clearInterval(joinInterval)
            }, 2000)
        })
    }
    myBox.append(myRoom)

}

function renderUsers(array) {
    Box.textContent = ''
    array.map((user) => {
        const userInfo = document.createElement('div')
        userInfo.classList.add('border')
        userInfo.classList.add('border-secondary')
        userInfo.classList.add('p-2')
        userInfo.classList.add('col-3')

        const image = document.createElement('img')
        image.src = user.picture.large;

        const Name = document.createElement('h3')
        Name.textContent = `${user.name.first} ${user.name.last}`

        const age = document.createElement('h5')
        age.textContent = user.dob.age

        const location = document.createElement('p')
        location.textContent = `${user.location.country}, ${user.location.city}`

        userInfo.appendChild(image);
        userInfo.appendChild(Name);
        userInfo.appendChild(age);
        userInfo.appendChild(location);
        Box.appendChild(userInfo)
    })
}
function renderFeed(array) {
    Box.textContent = ''
    array.map((user) => {

        const Userinfo = document.createElement('div')
        Userinfo.classList.add('row')
        Userinfo.classList.add('border')
        Userinfo.classList.add('border-secondary')

        const image = document.createElement('img')
        image.src = user.picture.large;
        image.classList.add('col-2')

        const Name = document.createElement('h3')
        Name.textContent = `${user.name.first} ${user.name.last}`
        Name.classList.add('col-2')

        Userinfo.appendChild(image)
        Userinfo.appendChild(Name)


        const load = document.createElement('div')
        load.textContent = 'Loading...'
        Userinfo.appendChild(load)

        fetch(activityUrl).then(response => response.json())
            .then(data => {
                let addActivity = document.createElement('span')
                addActivity.classList.add('row')
                addActivity.classList.add('col')
                addActivity.innerHTML = `<h5 class="col p-4">${data.activity}</h5><div class="col p-2"><p>required participants: <b>${data.participants}</b></p>type of activity: <b>${data.type}</div>`
                load.parentNode.replaceChild(addActivity, load);
            })

        Box.appendChild(Userinfo)
    })
}
