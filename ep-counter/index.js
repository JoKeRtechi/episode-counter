
let countEl = document.getElementById("count-el")
let count = 0
let pa = document.getElementById("paragraph")

function increase() {
    count += 1
    countEl.textContent = count
}

function decrease() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let par = "  " + count + " - "
    pa.textContent += par
    count = 0
}



