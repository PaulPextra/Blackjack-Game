let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let player = {
	name: "Pextra",
	chips: 500
}
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");
let playerChips = player.chips;
let playerName = player.name;
playerEl.textContent = playerName + ": $" + playerChips;

function start() {
	let firstCard = randomNum();
	let secondCard = randomNum();
	cards = [firstCard, secondCard];
	sum += firstCard + secondCard;
	renderGame();
}

function randomNum() {
		let randomCard = Math.floor(Math.random() * 13) + 1;
		if (randomCard > 10) {
			return 10;
		} else if (randomCard === 1) {
			return 11;
		} else {
			return randomCard;
		}
	}

function renderGame() {
	cardEl.textContent = "Cards: ";
	for (let i = 0; i < cards.length; i++) {
		cardEl.textContent += cards[i] + " ";
	}
	sumEl.textContent = "Sum: " + sum;

	if(sum <= 20) {
		message = "Do you want to draw a card?";
	} else if(sum === 21) {
		message = "You've got Blackjack!";
		hasBlackjack = true;
	} else if(sum > 21) {
		message = "You're out of the game!"
		isAlive = false;
	}
	messageEl.textContent = message;
}

function newCard() {
	if(hasBlackjack === false && isAlive === true) {
		let card = randomNum()
		sum += card;
		cards.push(card);
		console.log(card)
		renderGame();
	} 
}
