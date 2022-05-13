function setLocal() {
    localStorage.setItem('list', JSON.stringify(list))
}

function getLocal() {
    if (!localStorage.getItem('list') || localStorage.getItem('list') == '[]') {
        console.log('Nothing saved in localStorage')
        setLocal()
    } else {
        list = JSON.parse(localStorage.getItem('list'))
    }
}