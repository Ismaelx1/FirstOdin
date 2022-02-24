let firstCard = 11;
let secondCard = 10;
let thirdCard = 6;
let cardsArr = [firstCard, secondCard, thirdCard];
let sum = firstCard + secondCard;
let message = ''
let messageEl = document.getElementById('message-el')
let cards = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el')

function startgame() {
    sum = cardsArr[0] + cardsArr[1]
    cards.textContent = "Cards: " + cardsArr[0] + " " + cardsArr[1];
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
  
   sum = cardsArr[0] + cardsArr[1] + cardsArr[2]
    cards.textContent = "Cards: " + cardsArr[0] + " " + cardsArr[1] + " " + cardsArr[2];
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        messageEl.textContent = "You want to draw another card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
    } else {
        messageEl.textContent = "You've Lost!"

    }
}