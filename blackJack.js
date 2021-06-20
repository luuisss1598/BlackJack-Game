// declare all the variables needed for the DOM
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");

// declare all the variables needed for game logic
let sum = 0; //keep track of the cards sum
let message = ""; //display message to the screen
let cards = []; //keep track of the cards
let isAlive = false; //if in or out of the game
let hasBlackJack = false //if you get blackjack then you win

//declare an object in order to keep track of the players
let player = {
    name: "Luis",
    chips: "$190"
}

//declare all the function necessary to run the game

//when you click start you star with random values
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    //we render the game to see if you got BlackJack or not
    //then we proceed with the rest of the game
    renderGame();
    
}

function renderGame() {
cardsEl.textContent = "Cards: "
    //we have to loop through the cards in order to display them into the screen
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum; //display the sum into the screen
    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message = "You've got Blackjack!";
        isAlive = false;
    } else {
        message = "You're out of the game!";
        isAlive= false;
    }

    messageEl.textContent = message;
}

//if you get anything below 20, then you can ask for another card
function newCard() {

    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if(randomNumber < 10) {
        return randomNumber;
    } else if(randomNumber === 1) {
        return 11;
    } else {
        return 10;
    }
}