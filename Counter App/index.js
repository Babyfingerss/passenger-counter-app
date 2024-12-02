let countEl = document.getElementById("countEl")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1 
    countEl.textContent = count
    console.log(count)
}
function save() {
    console.log(count)
    let entries = (count + " - ")
    saveEl.textContent += entries
    count = 0
    countEl.textContent = count
}

