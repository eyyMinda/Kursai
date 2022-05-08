console.clear();

const myBox = document.getElementById('myBox');
const Box = document.getElementById('Box');
const myRoom = document.getElementById('expand');

const usersUrl = 'https://randomuser.me/api/';
const users100 = '?results=100';
const activityUrl = 'http://www.boredapi.com/api/activity/';
const responseUrl = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&sentences=1'

let users;
let me;

//Get a random integer for timeouts
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function renderMe(me) {
    myBox.innerHTML = ''
    myBox.innerHTML += `<div class="col border"><img src="${me.picture.large}" class="border border-primary"><h3>${me.name.first} ${me.name.last}</div>`
    ///RENDER MY ROOM
    if (roomType) {
        myRoom.style.display = 'none'
        fetch(roomType).then(response => response.json()).then((data) => {
            let type = data.type.charAt(0).toUpperCase() + data.type.slice(1)
            myBox.innerHTML += `<ul class="border list-group">
                <li class="list-group-item bg-dark text-primary">Activity: <b>${data.activity}</b></li><hr>
                <li class="list-group-item bg-dark text-primary">Activity type: <b>${type}</b></li>
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
                if (i == 6) clearInterval(joinInterval)
            }, getRandomInt(1, 11) + '000')
        })
    }
    myBox.append(myRoom)
}

function renderUsers(array) {
    Box.textContent = ''
    array.map((user) => {
        Box.innerHTML += `
        <div class='border border-secondary p-2 col-3'>
            <img src='${user.picture.large}' class='border border-primary'>
            <h3>${user.name.first} ${user.name.last}</h3>
            <h5>${user.dob.age}</h5>
            <p>${user.location.country}, ${user.location.city}</p>
        </div>
        `
    })
}

function renderFeed(array) {
    Box.textContent = ''
    array.map((user) => {
        const Userinfo = document.createElement('div')
        Userinfo.classList.add('row')
        Userinfo.classList.add('border')
        Userinfo.classList.add('border-secondary')

        Userinfo.innerHTML += `
        <img src='${user.picture.large}' class='col-2'>
        <h3 class='col-3'>${user.name.first}, ${user.name.last}</h3>
        `
        const load = document.createElement('p')
        load.classList.add('col')
        load.textContent = 'Loading...'
        Userinfo.appendChild(load)

        fetch(activityUrl).then(response => response.json())
            .then(data => {
                let type = data.type.charAt(0).toUpperCase() + data.type.slice(1)
                let addActivity = document.createElement('span')
                addActivity.classList.add('row')
                addActivity.classList.add('col')
                addActivity.innerHTML = `<h5 class="col-8 p-4">${data.activity}</h5><div class="col p-1"><small>Required participants: </small><br><b>${data.participants}</b><br><small>Type of activity: </small><br><b>${type}</div>`
                load.parentNode.replaceChild(addActivity, load);
            })

        Box.appendChild(Userinfo)
    })
}

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


///ChatBox
const Chat = document.getElementById("wholeChat");
const btnChat = document.getElementById("openChat");
const messenger = document.getElementById("messenger");
const msgArea = document.getElementById('msgArea')
const randomUserEl = document.getElementById('randomUserEl')
const chatInput = document.getElementById("inp_text");
const btnSend = document.getElementById("send");
const typingSvg = document.getElementById("typingSvg");

let pic;
let randName;

function openChat() {
    if (messenger.style.visibility === "hidden") {
        messenger.style.visibility = "visible";
        messenger.style.height = '550px'
        btnChat.textContent = 'Close Messenger'
        Chat.style.bottom = '0px'

    } else {
        messenger.style.visibility = "hidden";
        messenger.style.height = '0'
        btnChat.textContent = 'Open Messenger'
        Chat.style.bottom = '-30px'
    }
}


function addRandomChatter() {
    randomUserEl.innerHTML = '';
    [...msgArea.children].forEach(child => child !== randomUserEl ? msgArea.removeChild(child) : 0);
    const randomChatter = users[Math.floor(Math.random() * 100)]
    pic = randomChatter.picture.thumbnail
    randName = randomChatter.name.first + ' ' + randomChatter.name.last

    if (randomChatter.picture) {
        randomUserEl.innerHTML += `<img src='${pic}'><span> ${randName}</span><hr>`
    } else {
        randomUserEl.innerHTML += `<i class="fas fa-user"></i><span> ${randName}</span><hr>`
    }
    msgArea.innerHTML += `<p class='response'>Hi there ${me.name.first}!</p>`
}


//ChatListeners
{
    chatInput.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            btnSend.click();
        }
    });
    btnSend.addEventListener(('click'), e => {
        e.preventDefault();
        if (randomUserEl.textContent.includes(randName)) {
            console.log('Chatting with someone')
            if (chatInput.value) {
                msgArea.innerHTML += `<p class="request">${chatInput.value}</p>`
                chatInput.value = ''

                setTimeout(() => {
                    msgArea.append(typingSvg)
                    typingSvg.style.display = 'block'
                    setTimeout(() => {
                        msgArea.removeChild(typingSvg)
                        typingSvg.style.display = 'none'
                        getResponse();
                    }, "2000")
                }, getRandomInt(2, 11) + '000')
                console.log('Will Respond in: ' + getRandomInt(2, 11) + 's')
            }
        } else {
            console.log('Not chatting with anyone')
            alert('You are not in chat with anyone. Click --Chat Random-- button to start chatting with a random person! Good beef to ya!')
        }

    })
}

function getResponse() {
    fetch(responseUrl)
        .then(response => response.json())
        .then(data => {
            // res = data.trim(5)
            console.log(data[0])
            msgArea.innerHTML += `<p class='response'>${data}</p>`
        })
        .catch(err => console.error(err));
}

///Search
let input = document.getElementById('searchInput')
let searchField = document.getElementById('searchField')

input.addEventListener('keyup', (e) => {
    const q1 = e.target.value.toLowerCase().split(' ')[0]
    const q2 = e.target.value.toLowerCase().split(' ')[1]
    const filteredUsers = users.filter((user) => {
        if (q1 != '') {
            if (user.name.first.toLowerCase().includes(q1) && (!q2 || user.name.last.toLowerCase().includes(q2))) {
                return user
            } else if (user.name.last.toLowerCase().includes(q1) && (!q2 || user.name.first.toLowerCase().includes(q2))) {
                return user
            }
            else {
                searchField.innerHTML = ''
            }
        } else {
            searchField.innerHTML = ''
        }
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



getUsers('users')