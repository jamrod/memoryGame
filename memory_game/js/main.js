console.log("Up and Running!");
//cards for game
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];

var cardsInPlay = [];

function checkForMatch(cardID) {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match.");
		} else {
		alert("Not this time, try again.")
		}
		document.getElementById('reset').style.visibility = "visible";

	};
}
function flipCard() {
	var cardID = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardID].cardImage);	
	checkForMatch(cardID);
}


function createBoard() {
	for (i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(this.cardElement);
	}
}

function reset() {
	cardsInPlay = [];
	var gameBoard = document.getElementById("game-board");
	for (i = 0; i <= 3; i++) {
		num = 3 - i;
		gameBoard.removeChild(gameBoard.childNodes[num]);
	}
	document.getElementById('reset').style.visibility = "hidden";	
	createBoard();	
}
document.getElementById('reset').addEventListener('click', reset);

createBoard();
