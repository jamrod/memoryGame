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
		suit: 'hearts',
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

function checkForMatch() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match.");
	} else {
		alert("Sorry, try again.")
		}
	};
}
function flipCard(cardID) {
console.log("User flipped " + cards[cardID].rank);
console.log("User flipped " + cards[cardID].suit);
console.log("User flipped " + cards[cardID].cardImage);
cardsInPlay.push(cards[cardID].name);
checkForMatch();
}

flipCard(0);
flipCard(2);

