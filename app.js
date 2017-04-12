/********************************
 * Let's Go
 *
 *******************************/

//vars
var  playerName,
     cash,
     bet,
     teachingMode,
     numberOfDecks,
     deck,
     playerCards,
     playerScore,
     houseCardA,
     houseCardB,
     houseAdditionalCards,
     houseScore;

// Let's get started, two questions
//playerName = window.prompt( 'Please enter your name:' );
playerName = 'Chris';
document.getElementById('player-name').innerHTML = playerName;

//numberOfDecks = window.prompt( 'How many decks would you like to play with? (1-6)' );


// Setup the Deck(s)
var cardsInSuite = []


var cards = [];
cards.push({name: 'Two of Clubs', value: 2});
cards.push({name: 'Three of Clubs', value: 3});
cards.push({name: 'Four of Clubs', value: 4});
cards.push({name: 'Five of Clubs', value: 5});
cards.push({name: 'Six of Clubs', value: 6});
cards.push({name: 'Seven of Clubs', value: 7});
cards.push({name: 'Eight of Clubs', value: 8});
cards.push({name: 'Nine of Clubs', value: 9});
cards.push({name: 'Ten of Clubs', value: 10});
cards.push({name: 'Jack of Clubs', value: 10});
cards.push({name: 'Queen of Clubs', value: 10});
cards.push({name: 'King of Clubs', value: 10});
cards.push({name: 'Ace of Clubs', value: 11});

cards.push({name: 'Two of Diamonds', value: 2});
cards.push({name: 'Three of Diamonds', value: 3});
cards.push({name: 'Four of Diamonds', value: 4});
cards.push({name: 'Five of Diamonds', value: 5});
cards.push({name: 'Six of Diamonds', value: 6});
cards.push({name: 'Seven of Diamonds', value: 7});
cards.push({name: 'Eight of Diamonds', value: 8});
cards.push({name: 'Nine of Diamonds', value: 9});
cards.push({name: 'Ten of Diamonds', value: 10});
cards.push({name: 'Jack of Diamonds', value: 10});
cards.push({name: 'Queen of Diamonds', value: 10});
cards.push({name: 'King of Diamonds', value: 10});
cards.push({name: 'Ace of Diamonds', value: 11});

cards.push({name: 'Two of Hearts', value: 2});
cards.push({name: 'Three of Hearts', value: 3});
cards.push({name: 'Four of Hearts', value: 4});
cards.push({name: 'Five of Hearts', value: 5});
cards.push({name: 'Six of Hearts', value: 6});
cards.push({name: 'Seven of Hearts', value: 7});
cards.push({name: 'Eight of Hearts', value: 8});
cards.push({name: 'Nine of Hearts', value: 9});
cards.push({name: 'Ten of Hearts', value: 10});
cards.push({name: 'Jack of Hearts', value: 10});
cards.push({name: 'Queen of Hearts', value: 10});
cards.push({name: 'King of Hearts', value: 10});
cards.push({name: 'Ace of Hearts', value: 11});

cards.push({name: 'Two of Spades', value: 2});
cards.push({name: 'Three of Spades', value: 3});
cards.push({name: 'Four of Spades', value: 4});
cards.push({name: 'Five of Spades', value: 5});
cards.push({name: 'Six of Spades', value: 6});
cards.push({name: 'Seven of Spades', value: 7});
cards.push({name: 'Eight of Spades', value: 8});
cards.push({name: 'Nine of Spades', value: 9});
cards.push({name: 'Ten of Spades', value: 10});
cards.push({name: 'Jack of Spades', value: 10});
cards.push({name: 'Queen of Spades', value: 10});
cards.push({name: 'King of Spades', value: 10});
cards.push({name: 'Ace of Spades', value: 11});

// for( var i = 0; i < 13; i++ ) {
//      clubs.push(i);
// }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var getCard = function() {

     //Pull a random card from the deck
     var cardnumber = getRandomInt(0, 51);

          //Make sure there is a card at that number
          if( typeof cards[cardnumber] == 'undefined' ) { cardnumber = getRandomInt(0, 51); }

     var displayCard = '<div class="single-card">' + cards[cardnumber].name + ' (' + cards[cardnumber].value + ')</div>';

     //Add points into array variable to be added up to score
     //totalPoints.push( cards[cardnumber].value );



     //Now remove that card so that it can't be played again
     //cards = cards.splice(cardnumber);

     var newCard = cards[cardnumber];

     delete cards[cardnumber];

     //return displayCard;
     return newCard;
}

//Get first two player cards and put them into an array to work with
var playerCards = [getCard(), getCard()];
var playerPoints = [];

for(i = 0; i < playerCards.length; i++) {

     var displayCard = '<div class="single-card">' + playerCards[i].name + ' (' + playerCards[i].value + ')</div>';
     document.getElementById('player-cards').innerHTML += displayCard;
     playerPoints.push( playerCards[i].value );

}

// Get a total sum of first two Player cards
var playerInitialSum = playerPoints.reduce(function (a, b) {
  return a + b;
}, 0);

document.getElementById('player-total-points').innerHTML += playerInitialSum;

// Get first two House cards and put them into an array to work with
var houseCards = [getCard(), getCard()];
var housePoints = [];

for(i = 0; i < houseCards.length; i++) {

     var displayCard = '<div class="single-card">' + houseCards[i].name + ' (' + houseCards[i].value + ')</div>';
     document.getElementById('house-cards').innerHTML += displayCard;
     housePoints.push( houseCards[i].value );

}

//Total House points for first two cards
var houseInitialSum = housePoints.reduce(function (a, b) {
  return a + b;
}, 0);

document.getElementById('house-total-points').innerHTML += houseInitialSum;

// add event listener to table
var linkEl = document.getElementById("hit-me");
//el.addEventListener("click", getCard, false);

function displayLinkInfo( event ) {
  event.preventDefault();
  console.log( event.target.innerHTML );
}

linkEl.addEventListener( 'click', displayLinkInfo, false );

// var linkEl = document.getElementsByTagName( 'a' )[0];
//
// function displayLinkInfo( event ) {
//   event.preventDefault();
//   console.log( event.target.innerHTML );
// }
//
// linkEl.addEventListener( 'click', displayLinkInfo, false );

console.log(cards);
console.log(Object.keys(cards));
