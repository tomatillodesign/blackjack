/********************************
 * Let's Go
 *
 *******************************/

//vars
var  playerName,
     cash = 10000,
     bet,
     teachingMode,
     numberOfDecks,
     deck,
     playerCards,
     aces,
     playerScore,
     houseCardA,
     houseCardB,
     houseAdditionalCards,
     houseScore,
     houseAces;

// Let's get started, two questions
//playerName = window.prompt( 'Please enter your name:' );
playerName = 'Chris';
document.getElementById('player-name').innerHTML = playerName;

//numberOfDecks = window.prompt( 'How many decks would you like to play with? (1-6)' );

/********************************
 * Set up the Deck
 *
 *******************************/

var cards = [];
cards.push({name: 'Two of Clubs', value: 2, symbol: '&clubs;'});
cards.push({name: 'Three of Clubs', value: 3, symbol: '&clubs;'});
cards.push({name: 'Four of Clubs', value: 4, symbol: '&clubs;'});
cards.push({name: 'Five of Clubs', value: 5, symbol: '&clubs;'});
cards.push({name: 'Six of Clubs', value: 6, symbol: '&clubs;'});
cards.push({name: 'Seven of Clubs', value: 7, symbol: '&clubs;'});
cards.push({name: 'Eight of Clubs', value: 8, symbol: '&clubs;'});
cards.push({name: 'Nine of Clubs', value: 9, symbol: '&clubs;'});
cards.push({name: 'Ten of Clubs', value: 10, symbol: '&clubs;'});
cards.push({name: 'Jack of Clubs', value: 10, symbol: '&clubs;'});
cards.push({name: 'Queen of Clubs', value: 10, symbol: '&clubs;'});
cards.push({name: 'King of Clubs', value: 10, symbol: '&clubs;'});
cards.push({name: 'Ace of Clubs', value: 11, symbol: '&clubs;'});

cards.push({name: 'Two of Diamonds', value: 2, symbol: '&diams;'});
cards.push({name: 'Three of Diamonds', value: 3, symbol: '&diams;'});
cards.push({name: 'Four of Diamonds', value: 4, symbol: '&diams;'});
cards.push({name: 'Five of Diamonds', value: 5, symbol: '&diams;'});
cards.push({name: 'Six of Diamonds', value: 6, symbol: '&diams;'});
cards.push({name: 'Seven of Diamonds', value: 7, symbol: '&diams;'});
cards.push({name: 'Eight of Diamonds', value: 8, symbol: '&diams;'});
cards.push({name: 'Nine of Diamonds', value: 9, symbol: '&diams;'});
cards.push({name: 'Ten of Diamonds', value: 10, symbol: '&diams;'});
cards.push({name: 'Jack of Diamonds', value: 10, symbol: '&diams;'});
cards.push({name: 'Queen of Diamonds', value: 10, symbol: '&diams;'});
cards.push({name: 'King of Diamonds', value: 10, symbol: '&diams;'});
cards.push({name: 'Ace of Diamonds', value: 11, symbol: '&diams;'});

cards.push({name: 'Two of Hearts', value: 2, symbol: '&hearts;'});
cards.push({name: 'Three of Hearts', value: 3, symbol: '&hearts;'});
cards.push({name: 'Four of Hearts', value: 4, symbol: '&hearts;'});
cards.push({name: 'Five of Hearts', value: 5, symbol: '&hearts;'});
cards.push({name: 'Six of Hearts', value: 6, symbol: '&hearts;'});
cards.push({name: 'Seven of Hearts', value: 7, symbol: '&hearts;'});
cards.push({name: 'Eight of Hearts', value: 8, symbol: '&hearts;'});
cards.push({name: 'Nine of Hearts', value: 9, symbol: '&hearts;'});
cards.push({name: 'Ten of Hearts', value: 10, symbol: '&hearts;'});
cards.push({name: 'Jack of Hearts', value: 10, symbol: '&hearts;'});
cards.push({name: 'Queen of Hearts', value: 10, symbol: '&hearts;'});
cards.push({name: 'King of Hearts', value: 10, symbol: '&hearts;'});
cards.push({name: 'Ace of Hearts', value: 11, symbol: '&hearts;'});

cards.push({name: 'Two of Spades', value: 2, symbol: '&spades;'});
cards.push({name: 'Three of Spades', value: 3, symbol: '&spades;'});
cards.push({name: 'Four of Spades', value: 4, symbol: '&spades;'});
cards.push({name: 'Five of Spades', value: 5, symbol: '&spades;'});
cards.push({name: 'Six of Spades', value: 6, symbol: '&spades;'});
cards.push({name: 'Seven of Spades', value: 7, symbol: '&spades;'});
cards.push({name: 'Eight of Spades', value: 8, symbol: '&spades;'});
cards.push({name: 'Nine of Spades', value: 9, symbol: '&spades;'});
cards.push({name: 'Ten of Spades', value: 10, symbol: '&spades;'});
cards.push({name: 'Jack of Spades', value: 10, symbol: '&spades;'});
cards.push({name: 'Queen of Spades', value: 10, symbol: '&spades;'});
cards.push({name: 'King of Spades', value: 10, symbol: '&spades;'});
cards.push({name: 'Ace of Spades', value: 11, symbol: '&spades;'});


/********************************
 * How much will you bet?
 *
 *******************************/

var placeBet = document.getElementById("the-bet");
placeBet.addEventListener( 'submit', returnBetAmount, false );

function returnBetAmount( event ) {
     event.preventDefault();
     betAmount = document.getElementById( 'bet-amount' );
     bet = betAmount.value;
     console.log('placeBet: ' + bet);
}




// var betForm = document.getElementById( 'the-bet' );
//
//      //var betAmount = document.getElementsByName( 'bet-amount' )[0];
//
// var betAmount = document.getElementById( 'bet-amount' );
//
//      // betAmount.value = 500;
//
// document.getElementById('cash').innerHTML += cash;
//
// function getBetFormValue() {
//
//     document.getElementById('the-bet').addEventListener( "submit", function(e) {
//          event.preventDefault();
//
//         betAmount = document.getElementById( 'bet-amount' );
//         console.log( 'Bet Amount: ' + betAmount.value );
//
//    }
//
//      );
//
// }
//
// //console.log( 'Bet: ' + getBetFormValue() );
//
// bet = getBetFormValue();



/********************************
 * Start Playing
 *
 *******************************/



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var getCard = function() {

     //Pull a random card from the deck
     var cardnumber = getRandomInt(0, cards.length);

          //Make sure there is a card at that number
          if( typeof cards[cardnumber] == 'undefined' ) { cardnumber = getRandomInt(0, 51); }

     var displayTextCard = '<div class="single-card">' + cards[cardnumber].name + ' (' + cards[cardnumber].value + ')</div>';

     // Create a new variable object that can be re-used later, because this function is returning the card object
     var newCard = cards[cardnumber];

     //Now remove that card so that it can't be played again
     var removed = cards.splice(cardnumber, 1);
     console.log('Removed card: ' + JSON.stringify(removed) );

     //return displayTextCard;
     return newCard;
}



//Get first two player cards and put them into an array to work with
var playerCards = [getCard(), getCard()];
var playerPoints = [];
var playerAces = [];

for(i = 0; i < playerCards.length; i++) {

     var displayTextCard = '<div class="single-card">' + playerCards[i].name + ' (' + playerCards[i].value + ')</div>';
     document.getElementById('player-cards').innerHTML += displayTextCard;
     playerPoints.push( playerCards[i].value );

     playerAces.push( playerCards[i].name );


     // Display Card Image

          //Determine red or black
          var CardName = playerCards[i].name;
          if( CardName.includes('Hearts') || CardName.includes('Diamonds') ) {
               var cardClass = 'red';
          } else {
               var cardClass = 'black';
          }

     var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + playerCards[i].name + ' (' + playerCards[i].value + ')<div class="card-symbols">' + playerCards[i].symbol + '</div></div>';
     document.getElementById('player-display-cards').innerHTML += displayCardImage;

}

// Get a total sum of first two Player cards
var playerPointTotal = playerPoints.reduce(function (a, b) {
  return a + b;
}, 0);

document.getElementById('player-total-points').innerHTML += playerPointTotal;


// Get first two House cards and put them into an array to work with
var houseCards = [getCard(), getCard()];
var housePoints = [];

for(i = 0; i < houseCards.length; i++) {

     var displayTextCard = '<div class="single-card">' + houseCards[i].name + ' (' + houseCards[i].value + ')</div>';
     document.getElementById('house-cards').innerHTML += displayTextCard;
     housePoints.push( houseCards[i].value );

     // Display Card Image

          //Determine red or black
          var CardName = houseCards[i].name;
          if( CardName.includes('Hearts') || CardName.includes('Diamonds') ) {
               var cardClass = 'red';
          } else {
               var cardClass = 'black';
          }

     var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + houseCards[i].name + ' (' + houseCards[i].value + ')<div class="card-symbols">' + playerCards[i].symbol + '</div></div>';
     document.getElementById('house-display-cards').innerHTML += displayCardImage;

     // Let's check for Aces
     var houseOldCardAces = CardName.includes('Ace');
     if( houseOldCardAces === true ) {
          houseAces = true;
     }



}

//Total House points for first two cards
var houseInitialSum = housePoints.reduce(function (a, b) {
  return a + b;
}, 0);

document.getElementById('house-total-points').innerHTML += houseInitialSum;






/********************************
 * Hit Me Button Functionality
 *
 *******************************/

var linkEl = document.getElementById("hit-me");

     // Don't Allow hits if player has Blackjack
     if( playerPointTotal === 21 ) {
          linkEl.removeEventListener( 'click', hitMeButton, false );
          linkEl.innerHTML = 'Blackjack!';
     }

function hitMeButton( event ) {
     event.preventDefault();

          // Don't Allow hits if player has Blackjack
          if( playerPointTotal === 21 ) {
               linkEl.removeEventListener( 'click', hitMeButton, false );
          }

     var newCard = getCard();
     playerCards.push( newCard );
     playerPoints.push( newCard.value );

     displayTextCard = '<div class="single-card">' + newCard.name + ' (' + newCard.value + ')</div>';
     document.getElementById('player-cards').innerHTML += displayTextCard;

     var newCardValue = newCard.value;
     playerPointTotal += newCardValue;

     var playerPointTotal = playerPoints.reduce(function (a, b) {
       return a + b;
     }, 0);

     console.log('Updated Player Point Total: ' + playerPointTotal);
     console.log('Updated Player Cards: ' +  JSON.stringify(playerCards));

     // Display Card Image

          //Determine red or black
          var newCardName = newCard.name;
          if( newCardName.includes('Hearts') || newCardName.includes('Diamonds') ) {
               var cardClass = 'red';
          } else {
               var cardClass = 'black';
          }

     var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + newCard.name + ' (' + newCard.value + ')<div class="card-symbols">' + newCard.symbol + '</div></div>';
     document.getElementById('player-display-cards').innerHTML += displayCardImage;


     // Let's check for Aces
     var aces = newCardName.includes('Ace');



     //console.log(playerAces);
     console.log(aces);

     if( aces === true ) {

          playerPointTotal -= 10;

     }


     document.getElementById('player-total-points').innerHTML = 'Total points: ' + playerPointTotal;

     if( (playerPointTotal > 21) && ( aces === false ) ) {

          linkEl.removeEventListener( 'click', hitMeButton, false );
          linkEl.innerHTML = 'Busted';

     } else if( playerPointTotal === 21 ) {

          linkEl.removeEventListener( 'click', hitMeButton, false );
          linkEl.innerHTML = 'Blackjack!';

     }





}

linkEl.addEventListener( 'click', hitMeButton, false );


/********************************
 * Stop Hitting Me
 *
 *******************************/

var linkEl = document.getElementById("stand");
function standButton( event ) {
     event.preventDefault();

     housePointTotal = houseInitialSum;

     console.log('House Point Total: ' + housePointTotal);

     /********************************
      * Now it's the House's turn
      *
      *******************************/

     while( housePointTotal < 17 ) {

          var newCard = getCard();
          houseCards.push( newCard );
          housePoints.push( newCard.value );

          var newCardValue = newCard.value;
          housePointTotal += newCardValue;

          var housePointTotal = housePoints.reduce(function (a, b) {
            return a + b;
          }, 0);

          console.log('Updated House Point Total: ' + housePointTotal);
          console.log('Updated House Cards: ' +  JSON.stringify(houseCards));

          document.getElementById('house-total-points').innerHTML = 'Total points: ' + housePointTotal;

          // Display Card Image

               //Determine red or black
               var newCardName = newCard.name;
               if( newCardName.includes('Hearts') || newCardName.includes('Diamonds') ) {
                    var cardClass = 'red';
               } else {
                    var cardClass = 'black';
               }

          var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + newCard.name + ' (' + newCard.value + ')<div class="card-symbols">' + newCard.symbol + '</div></div>';
          document.getElementById('house-display-cards').innerHTML += displayCardImage;

          // Let's check for Aces
          var houseNewCardAces = newCardName.includes('Ace');

          if( houseNewCardAces === true ) {
               houseAces = true;
          }


          if( (housePointTotal > 21) && (houseAces === true) ) {
                    housePointTotal -= 10;
          }



}

     console.log('Aces: ' + houseAces);

     // Time to check the house's score

     // document.getElementById('house-total-points').innerHTML = 'Total points: ' + housePointTotal;
     // var houseStatus = document.getElementById('house-status');

//     if( (housePointTotal > 21) && ( aces === false ) ) {
     // if( (housePointTotal > 21) ) {
     //
     //      if( houseAces === true ) {
     //           housePointTotal -= 10;
     //           }

     if( (housePointTotal > 21) ) {

          //linkEl.removeEventListener( 'click', hitMeButton, false );
          document.getElementById('house-total-points').innerHTML = 'Total points: ' + housePointTotal;
          var houseStatus = document.getElementById('house-status');
          houseStatus.innerHTML = 'Busted';

     } else if( housePointTotal === 21 ) {

          //linkEl.removeEventListener( 'click', hitMeButton, false );
          document.getElementById('house-total-points').innerHTML = 'Total points: ' + housePointTotal;
          var houseStatus = document.getElementById('house-status');
          houseStatus.innerHTML = 'Blackjack!';

     }

}
linkEl.addEventListener( 'click', standButton, false );




console.log(cards);
console.log(Object.keys(cards));
console.log('Initial Player Point Total: ' + playerPointTotal);
