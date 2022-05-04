const Box = document.getElementById('Box');
// const activityBox = document.getElementById('activityBox');

const usersUrl = 'https://randomuser.me/api/';
const activityUrl = 'http://www.boredapi.com/api/activity/';
const users100 = '?results=100';
let users;

function getUsers(type) {
    fetch(usersUrl + users100)
        .then(response => response.json())
        .then(data => {
            users = data.results;
            // keys = Object.keys(users[0])
            // console.log(users, keys, users[0].picture)
            getActivity(users, type)
        });
}

getUsers('users')

function getActivity(check, type) {
    if (type == 'feed') {
        for (let i = 0; i < 100; i++) {
            fetch(activityUrl)
                .then(response => response.json())
                .then(data => {
                    const activityBox = document.createElement('div')
                    activityBox.innerHTML += `<h4>${data.activity}</h4><p>Type: ${data.type}, Participants: ${data.participants}`
                    console.log(activityBox)
                    renderBox(check, type, activityBox)
                })
        }
    } else {
        fetch(activityUrl)
            .then(response => response.json())
            .then(data => {
                renderBox(check, type, data)
            })
    }
}

function renderBox(array, boxtype, activity) {
    if (boxtype == 'users') {
        renderUsers(array)
        console.log('userss')
    } else if (boxtype == 'feed') {
        renderFeed(array, activity)
        console.log('feeed')
    }

}
function renderUsers(array) {
    Box.textContent = ''
    array.map((user) => {
        const userInfo = document.createElement('div')
        userInfo.classList.add('border')
        userInfo.classList.add('p-2')

        const image = document.createElement('img')
        image.src = user.picture.large;

        const Name = document.createElement('h3')
        Name.textContent = `${user.name.first} ${user.name.last}`

        const age = document.createElement('h5')
        age.textContent = user.dob.age

        const location = document.createElement('p')
        location.textContent = `${user.location.iry}, ${user.location.city}`

        userInfo.appendChild(image);
        userInfo.appendChild(Name);
        userInfo.appendChild(age);
        userInfo.appendChild(location);
        Box.appendChild(userInfo)
    })
}
function renderFeed(array, info) {
    Box.textContent = ''
    array.map((user) => {

        const Userinfo = document.createElement('div')
        Userinfo.classList.add('row')
        Userinfo.classList.add('border')

        const image = document.createElement('img')
        image.src = user.picture.large;
        image.classList.add('col-2')

        const Name = document.createElement('h3')
        Name.textContent = `${user.name.first} ${user.name.last}`
        Name.classList.add('col-2')

        // const Activity = document.createElement('div')
        // Activity.classList.add('col')
        // Activity.textContent = info[0].activity
        // Activity.innerHTML += `<h4>info.activity</h4><p>Type: ${info[0].type}, Participants: ${info[0].participants}`

        Userinfo.appendChild(image)
        Userinfo.appendChild(Name)
        Userinfo.appendChild(info)

        Box.appendChild(Userinfo)
    })
}
