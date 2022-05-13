submitBtn.addEventListener(('click'), e => {
    e.preventDefault();
    if (!inputName.value) {
        inputName.placeholder = 'Fill out this field!'; inputName.style.borderColor = 'red';
    } else if (!inputAmount.value) {
        inputAmount.placeholder = 'Fill out this field!'; inputAmount.style.borderColor = 'red';
    } else {
        list.push({ 'number': '', 'name': inputName.value, 'amount': inputAmount.value, 'dateadded': date, 'time': time, editBtn: '', delBtn: '' })
        inputName.value = ''
        inputAmount.value = ''
        setLocal()
        getLocal()
        renderTable(list)
    }
})