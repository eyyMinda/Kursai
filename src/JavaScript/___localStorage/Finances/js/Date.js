//Date\\
const d = new Date()
const [month, day, year, hours, minutes] = [(d.getMonth() + 1).toString().padStart(2, '0'), d.getDate().toString().padStart(2, '0'), d.getFullYear(), d.getHours().toString().padStart(2, '0'), d.getMinutes().toString().padStart(2, '0')]
let date = [month, day, year].join('-')
let time = [hours, minutes].join(':')
