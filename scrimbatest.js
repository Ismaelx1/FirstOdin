let dice1 = document.getElementById('text-el');
let dice2 = document.getElementById('text-el1');
let resultEl = document.getElementById('result')

function diceit() {
    let ran1 = Math.floor(Math.random() * 7);
    let ran2 = Math.floor(Math.random() * 7);
    dice1.textContent = ran1;
    dice2.textContent = ran2;
    let sum = ran1 + ran2;
    if (sum > 9) { 
        resultEl.textContent = "You've won the jackpot man gg"

    } else if (sum === 8) {
        resultEl.textContent = "Haha Lucky number nice"
        alert('Congrats you are lucky')
    } else {
        resultEl.textContent = "Meeh normal.. :/"
    }
}