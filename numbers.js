const output = document.getElementById('output')
const fullDateButton = document.getElementById('fullDate')
const dateButton = document.getElementById('date')
const timeButton = document.getElementById('time')

let mode = 'time'

update()

setInterval(() => update(), 1000) 

function update() {
    output.textContent = switchDateFormat(mode)
}   

function switchDateFormat (formatMode) {
    const now = new Date()

    switch(formatMode){
        case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        case 'date': return now.toLocaleDateString()
        case 'time': return now.toLocaleTimeString()
        default: return now.toLocaleTimeString()
    }
}

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

dateButton.onclick = bindMode('date')
timeButton.onclick = bindMode('time')
fullDateButton.onclick = bindMode('full')