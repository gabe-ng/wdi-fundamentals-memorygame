let cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}, 
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}, 
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}, 
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];

let cardsInPlay = [];
let matches = 0;

const checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			cardsInPlay.length = 0;
			matches++;
			//check to see if user found all the matches
			checkForWin();
		} else {
			alert("Sorry try again.");
			cardsInPlay.length = 0;
			//if cards do not match, flip them back over
			hideCard();
		}
	}
}

const showCard = function() {
	let cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	this.classList.add("revealed");
	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].rank + ".");
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//short delay for alert so that both cards flip before alert happens
	setTimeout(checkForMatch, 500);

}

const hideCard = function() {
	let revealedCards = document.getElementsByClassName("revealed");
	revealedCards[0].setAttribute("src", "images/back.png");
	revealedCards[1].setAttribute("src", "images/back.png");
	revealedCards[0].classList.remove("revealed");
	revealedCards[0].classList.remove("revealed");
}

const checkForWin = function() {
	if (matches === 2) {
		alert("Great job! You found them all!");
	}
}

const createBoard = function() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", showCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

const resetGame = function() {
	//clear the game board
	document.getElementById("game-board").innerHTML = "";
	matches = 0;
	cardsInPlay.length = 0;
	createBoard();
}

let reset = document.getElementById("reset");
reset.addEventListener("click", resetGame);

createBoard();