const myBox = document.getElementById('myBox');
const Box = document.getElementById('Box');
const expand = document.getElementById('expand');

const usersUrl = 'https://randomuser.me/api/';
const activityUrl = 'http://www.boredapi.com/api/activity/';
const users100 = '?results=21';
let users;
let me;

//search

const input = document.getElementById('searchInput')

//create an activity room
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

function getUsers(type) {
    fetch(usersUrl + users100)
        .then(response => response.json())
        .then(data => {
            users = data.results;
            me = data.results[20]
            renderMe(me)

            if (type == 'users') {
                renderUsers(users)
                console.log('userss')
            } else if (type == 'feed') {
                renderFeed(users)
                console.log('feeed')
            }
            return users;
        });
}

getUsers('users')

input.addEventListener('keyup', function() {
    //blablabla einu miegot its 4am
})


function roomCreation() {
    expand.innerHTML = ''
    expand.innerHTML += `
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
        expand.style.display = 'none'
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
        
                    usersJoined.innerHTML += `<span>
                    <img src="${participant.picture.thumbnail}">
                    ${participant.name.first} ${participant.name.last}
                    </span><br>`
                    i++
                    if (i == 4) clearInterval(joinInterval)
                }, 2000)
        })
    }
    myBox.append(expand)

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
        fetch(activityUrl)
            .then(response => response.json())
            .then(data => {
                Userinfo.innerHTML += `<h5 class="col-5 p-4">${data.activity}</h5><div class="col p-2"><p>required participants: <b>${data.participants}</b></p>type of activity: <b>${data.type}</div>`
            })

        Box.appendChild(Userinfo)
    })
}
