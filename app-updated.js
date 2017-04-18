/********************************
 * Starting Again, Based on Flowchart
 *
 * Let's Go
 *
 *******************************/


//vars
var  playerName,
     cash = 50,
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
     houseAces,
     phase = 1,
     winner = null;

// Let's get started, two questions
//playerName = window.prompt( 'Please enter your name:' );
playerName = 'Chris';
document.getElementById('player-name').innerHTML = playerName;

document.getElementById('cash').innerHTML += cash;

//numberOfDecks = window.prompt( 'How many decks would you like to play with? (1-6)' );

/********************************
 * Set up the Deck
 *
 *******************************/

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

// Custom Function to get Card Totals out of array
var cardTotal = 0;
function addCards( cardArray ) {

     cardTotal = 0;

     for(i = 0; i < cardArray.length; i++) {
          cardTotal += cardArray[i].value;
     }

     return cardTotal;
}

// Custom Function to check for Aces, will return TRUE if Aces
function acesCheck( cardArray ) {

     var newCardName;

     for(i = 0; i < cardArray.length; i++) {
          newCardName += cardArray[i].name;
          var aces = newCardName.includes('Ace');

          if(aces === true) {
               return true;
          }
     }


}

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
     //console.log('Removed card: ' + JSON.stringify(removed) );

     //return displayTextCard;
     return newCard;
}



/********************************
 * Cashing Out
 *
 *******************************/

var cashOut = document.getElementById("cash-out");
cashOut.addEventListener( 'click', logHighScore, false );

function logHighScore(e) {
     event.preventDefault();

     document.getElementById('status').innerHTML = 'Thanks for playing! Your total cash is: $' + cash;
     console.log('Your Score: $' + cash);

}


/********************************
 * How much will you bet?
 *
 *******************************/

var placeBet = document.getElementById("the-bet");

// Need some kind of looping action ?????


     placeBet.addEventListener( 'submit', returnBetAmount, false );

     function returnBetAmount( event ) {
          event.preventDefault();

          betAmount = document.getElementById( 'bet-amount' );
          bet = betAmount.value;

               // Validate that bet is not more than cash
               if(bet > cash) {
                  alert("You cannot bet more money than you have!");
                  return false;
               }

          console.log('placeBet: ' + bet);

          /********************************
           * Deal the Hand
           *
           *******************************/

          var playerCards = [getCard(), getCard()];
          var playerPoints = [];

          var houseCards = [getCard(), getCard()];
          var housePoints = [];

          console.log('Initial Player Cards: ' +  JSON.stringify(playerCards));
          console.log('Initial House Cards: ' +  JSON.stringify(houseCards));

          // Show the House Cards

          for(i = 0; i < houseCards.length; i++) {

               var displayTextCard = '<div class="single-card">' + houseCards[i].name + ' (' + houseCards[i].value + ')</div>';
               //document.getElementById('house-cards').innerHTML += displayTextCard;
               housePoints.push( houseCards[i].value );

               // Display Card Image

                    //Determine red or black
                    var CardName = houseCards[i].name;
                    if( CardName.includes('Hearts') || CardName.includes('Diamonds') ) {
                         var cardClass = 'red';
                    } else {
                         var cardClass = 'black';
                    }

               // For the House, only display the first card
               if ( i === 1 ) {
                    var cardClass = 'card-back';
                    var displayCardImage = '<div class="single-card-image ' + cardClass + '"></div>';
                    //document.getElementById('house-display-cards').innerHTML += displayCardImage;
               } else {
                    var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + houseCards[i].name + ' (' + houseCards[i].value + ')<div class="card-symbols">' + playerCards[i].symbol + '</div></div>';
                    //document.getElementById('house-display-cards').innerHTML += displayCardImage;
               }

               //var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + houseCards[i].name + ' (' + houseCards[i].value + ')<div class="card-symbols">' + playerCards[i].symbol + '</div></div>';
               document.getElementById('house-display-cards').innerHTML += displayCardImage;

          }


          // Show the Player Cards

          for(i = 0; i < playerCards.length; i++) {

               var displayTextCard = '<div class="single-card">' + playerCards[i].name + ' (' + playerCards[i].value + ')</div>';
               //document.getElementById('house-cards').innerHTML += displayTextCard;
               playerPoints.push( playerCards[i].value );

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

          playerPoints = addCards( playerCards );
          housePoints = addCards( houseCards );

          console.log( 'Player Card Total: ' + playerPoints);
          console.log( 'House Card Total: ' + housePoints);

          document.getElementById('player-total-points').innerHTML += addCards( playerCards );

          //determine winner - just testing
          if( playerPoints > housePoints ) {
               winner = 'player';
          } else {
               winner = 'house';
          }

               /********************************
                * Check for Naturals
                *
                *******************************/

                if( playerPoints === 21 && housePoints != 21 ) {
                     document.getElementById('action').innerHTML += 'You got a Natural! You win the hand.';
                     winner = 'player';
                } else if( playerPoints != 21 && housePoints === 21 ) {
                    document.getElementById('action').innerHTML += 'The House got a Natural! House wins the hand.';
                    winner = 'house';
               } else if( playerPoints === 21 && housePoints === 21 ) {
                    document.getElementById('action').innerHTML += 'You both got Naturals! Your bet is returned.';
                    winner = 'tie';
               }

               /********************************
                * Check for Double Aces
                *
                *******************************/

                if( (playerPoints === 22) && (acesCheck(playerCards)) === true ) {
                     playerPoints -= 10;
                }

               /********************************
                * Opportunity to Double Down
                *
                *******************************/

                if( (playerPoints === 9 || playerPoints === 10 || playerPoints === 11 ) && (cash >= bet*2) ) {

                     document.getElementById('action').innerHTML += 'Would you like to double-down? <a href="#" id="double-down">Yes</a>';

                     var doubleDown = document.getElementById("double-down");
                     doubleDown.addEventListener( 'click', doubleDownUpdateBet, false );

                     function doubleDownUpdateBet(e) {
                          event.preventDefault();
                          bet = bet * 2;
                          console.log('New Bet (Double Down): $' + bet);
                     }

                }



                /********************************
                 * Hit Me Button Functionality
                 *
                 *******************************/

                var linkEl = document.getElementById("hit-me");
                linkEl.addEventListener( 'click', hitMeButton, false );



                function hitMeButton( event ) {
                     event.preventDefault();



                          //Remove Double Down Notice Opportunity
                          if(doubleDown) {
                               doubleDown.removeEventListener( 'click', doubleDownUpdateBet, false );
                               document.getElementById('action').innerHTML = '';
                         }

                    //Get New Card
                     var newCard = getCard();
                     playerCards.push( newCard );
                     //playerPoints.push( newCard.value );

                    //  displayTextCard = '<div class="single-card">' + newCard.name + ' (' + newCard.value + ')</div>';
                    //  document.getElementById('player-cards').innerHTML += displayTextCard;

                     var newCardValue = newCard.value;

                     playerPoints = addCards( playerCards );

                     //Aces Check
                     if( (acesCheck(playerCards) === true) && (playerPoints > 21) ) {
                          console.log('Player Aces? ' + acesCheck(playerCards));
                          playerPoints -= 10;
                     }

                          // Don't Allow hits if player has Blackjack
                          if( playerPoints === 21 ) {
                               linkEl.removeEventListener( 'click', hitMeButton, false );
                               linkEl.innerHTML = 'Blackjack!';
                          }

                          // HAND IS OVER, Don't Allow hits if player is Busted
                          if( playerPoints > 21 ) {
                               linkEl.removeEventListener( 'click', hitMeButton, false );
                               linkEl.innerHTML = 'Busted!';

                               document.getElementById('action').innerHTML += 'Busted. The House wins the hand.';
                               winner = 'house';
                          }

                     document.getElementById('player-total-points').innerHTML = 'Total points: ' + playerPoints;

                     console.log('Updated Player Point Total: ' + playerPoints);
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



                }

                //Any Aces?
                console.log('Player Aces? ' + acesCheck(playerCards));

          console.log('Winner: ' + winner);

     }
