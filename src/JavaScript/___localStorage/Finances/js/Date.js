//Date\\
const d = new Date()
const [hours, minutes] = [d.getHours().toString().padStart(2, '0'), d.getMinutes().toString().padStart(2, '0')]
let date = d.toISOString().slice(0,10)
let time = [hours, minutes].join(':')