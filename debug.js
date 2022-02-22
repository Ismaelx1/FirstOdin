let counter =  document.getElementById('counter');
let number = 0;
  
function count() {
    number += 1;
    counter.textContent = number
}

let entery = document.getElementById('enteries')


function save() {
   let countStr = number + " | "
   entery.textContent += countStr
}

function redo() {
    counter.textContent = 0
    number -= number
}

