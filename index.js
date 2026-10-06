const getRandomIntegerInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

let firstNumber = 0
let secondNumber = 0
let sum = 0

let hasBlackJack = false
let isAlive = true
let message = ""

let cardEl = document.getElementById("card-el")
let resultEl = document.getElementById("result-el")
let sumEl = document.getElementById("sum-el")


function startGame() {
    isAlive = true
    hasBlackJack = false

    firstNumber = getRandomIntegerInclusive(2, 11)
    secondNumber = getRandomIntegerInclusive(2, 11)
    sum = firstNumber + secondNumber

    cardEl.textContent = `Cards: ${firstNumber}, ${secondNumber}`
    sumEl.textContent = `Sum: ${sum}`

    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }

    resultEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomIntegerInclusive(2, 11)
        sum += card

        cardEl.textContent += `, ${card}`
        sumEl.textContent = `Sum: ${sum}`

        if (sum <= 20) {
            message = "Do you want to draw another card?"
        } else if (sum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of the game"
            isAlive = false
        }

        resultEl.textContent = message
    }
}

function endGame() {
    if (isAlive) {
        message = `You stood with a score of ${sum}`
        resultEl.textContent = message
        isAlive = false
    }
}