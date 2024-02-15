const input = document.querySelector('input')
const list = document.querySelector('table')
const numbers = []

document.querySelector('#add').addEventListener('click', () => {
    const newNumber = parseInt(input.value)
    numbers.push(newNumber)
    const row = list.insertRow()
    const col1 = row.insertCell(0)

    col1.innerHTML = newNumber
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