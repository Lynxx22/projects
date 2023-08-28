
let countEl = document.getElementById("count-el")
let count = 0
let entries = document.getElementById("entries")

function increaseBy1 () {
   count = count + 1
   countEl.innerText = count
}



function increaseBy2 () {
   count = count + 2
   countEl.innerText = count
}
increaseBy2 ()
function increaseBy5 () {
   count = count + 5
   countEl.innerText = count
}


function save () {
let saveEntries = " " + count + " - "
entries.innerText += saveEntries
count = 0
countEl.innerText = 0
}


function reset () {
   count = 0
  countEl.innerText = 0
  entries.innerText = "Poeple enturies : "
  
}
 

