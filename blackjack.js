let firstCard = Math.floor(Math.random() * 8) + 2;
let secondCard = Math.floor(Math.random() * 9) + 2;
let thirdCard = 6;
let cardsArr = [firstCard, secondCard, thirdCard];
let sum = firstCard + secondCard;
let message = ''
let messageEl = document.getElementById('message-el')
let cards = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el')

function startgame() {
    sum = cardsArr[0] + cardsArr[1]
    cards.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        messageEl.textContent = "You want to draw another card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
    } else {
        messageEl.textContent = "You've Lost!"

    }
}
function newcard() {
 
    let random = Math.floor(Math.random() * 11) + 2;
 sum = firstCard + secondCard + random
    cards.textContent = "Cards: " + firstCard + " " + secondCard + " " + random;
   sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        messageEl.textContent = "You want to draw another card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
    } else {
        messageEl.textContent = "You've Lost!"

    }
}