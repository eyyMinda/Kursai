let list = [
    {
        name: "Benny",
        description: "huge cunt what can i say" //or tooltip:
    },
    {
        name: "Ronnie",
        description: "meh"
    },
    {
        name: "Fisher",
        description: "who's that"
    },
    {
        name: "Vovo",
        description: "okay as a car"
    },
    {
        name: "Rosita",
        description: "I Ain't Gonna Say Anything."
    },
    {
        name: "Berta",
        description: "my gf in mafijos karai"
    },
    {
        name: "Chizzle",
        description: "likes to jizzle"
    },
]

/////////////////List of Names and hidden Descriptions\\\\\\\\\\\\\\

const listBox = document.getElementById('listBox');

function renderList() {
    list.map((item) => {
        const listEl = document.createElement('li')
        listEl.classList.add('bg-info')
        listEl.classList.add('p-4')
        listEl.classList.add('text-center')
        listEl.textContent = item.name;
        const description = document.createElement('p');
        listEl.classList.add('border')
        description.textContent = item.description;
        description.style.display = 'none';
        listEl.appendChild(description);

        listEl.addEventListener('mouseenter', () => {
            description.style.display = 'block';
        })
        listEl.addEventListener('mouseleave', () => {
            description.style.display = 'none';
        })
        listBox.appendChild(listEl)
    })
}
renderList();

/////////////////Validate input value\\\\\\\\\\\\\\

const input = document.getElementById('inputBox');
const alert = document.getElementById('validationAlert')
input.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    alert.style.display = 'block';
    if (e.target.value == 'Labas!') {
        alert.style.display = 'none';
    }
})

/////////////////Cookies\\\\\\\\\\\\\\

const login = document.getElementById('login');
const inputName = document.getElementById('inputName');
const inputPass = document.getElementById('inputPass');

function setCookies() {
    document.cookie = `password = ${inputPass.value}`
    document.cookie = `username = ${inputName.value}`
    // document.cookie = 'username=';
    // document.cookie = 'password=';
}
function getCookie(cname) { //dont work
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    // console.log(decodedCookie)
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    let username = getCookie("username");
    if (username == "fe") {
        alert("Welcome again " + username);
    } else {
        alert('no')
    }
}
checkCookie();