const input = document.querySelector('input')
const list = document.querySelector('table')
const numbers = []

document.querySelector('#add').addEventListener('click', () => {
    const newNumber = parseInt(input.value)
    numbers.push(newNumber)
    addTableRow(newNumber)
    input.value = ''
})

document.querySelector('#min').addEventListener('click', () => {
    const min = Math.min(...numbers)
    alert('Minimum number is ' + min)
})

document.querySelector('#max').addEventListener('click', () => {
    const max = Math.max(...numbers)
    alert('Maximum number is ' + max)
})

document.querySelector('#average').addEventListener('click', () => {
    let sum = 0
    for (let i = 0; i<numbers.length; i++)   {
        sum+= numbers[i]
    }
    const average = sum / numbers.length
    alert('Average is ' + average)

})

const deleteRow = (newNumber) => {
    const index = numbers.indexOf(newNumber)
    numbers.splice(index,1)
    list.deleteRow(index)
}

const addTableRow = (text) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)

    col1.innerHTML= text
}

document.querySelector('#sort').addEventListener('click', () => {
    numbers.sort((a,b) => a-b)
    while (list.rows.length > 0) {
        list.deleteRow(0)
    }

    numbers.forEach(newNumber => addTableRow(newNumber))
})