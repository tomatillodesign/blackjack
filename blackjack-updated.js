/********************************
 * Starting Again, Using New For Loop to run the game
 *
 * Let's Go
 *
 *******************************/

//vars
var  playerName,
     cash = 1000,
     bet,
     teachingMode,
     numberOfDecks,
     deck,
     playerCards,
     aces,
     playerPoints,
     houseCards,
     housePoints,
     winner,
     playerDoubleDown,
     cashArray = [1000];

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


var updateCashWin = function(cash, bet) {

     cash += bet;
     console.log('updateCashWin: ' + cash);
     cashArray.push(cash);
     return cash;

}

var updateCashLoss = function(cash, bet) {

     cash -= bet;
     console.log('updateCashLoss: ' + cash);
     cashArray.push(cash);
     return cash;
};


var naturalCheck = function( cardArray ) {

     points = addCards( cardArray );

     if( points === 21 ) {
          var natural = 'natural';
          console.log( 'Natural - YEP');
          return natural;
     }

     else {
          return;
     }

};


// var hitMeNewCard = function() {
//
//      var newCard = getCard();
//      playerCards.push( newCard );
//
// };


var determineWinner = function(playerPoints, housePoints) {

     // Determine Winner of hand
     if( playerPoints > 21 ) {
          winner = 'House';
     } else if ( housePoints > 21 && playerPoints <= 21 ) {
          winner = 'Player';
     } else if ( housePoints <= 21 && housePoints > playerPoints ) {
          winner = 'House';
     } else if ( playerPoints <= 21 && playerPoints > housePoints ){
          winner = 'Player';
     } else if ( playerPoints === housePoints ) {
          winner = 'Tie';
     }

     console.log('And the winner is: ' + winner);

     return winner;

};

var handOverMessage = function(playerPoints, housePoints, bet) {

     var message;

     // Determine Winner of hand
     if( playerPoints > 21 ) {
          message = '<div id="status">You busted and lost your bet of $' + bet + '.</div>';
     } else if ( housePoints > 21 && playerPoints <= 21) {
          message = '<div id="status">The House busted. You won $' + bet + '.</div>';
     } else if ( housePoints <= 21 && housePoints > playerPoints ) {
          message = '<div id="status">The House won and you lost your bet of $' + bet + '.</div>';
     } else if ( playerPoints <= 21 && playerPoints > housePoints ){
          message = '<div id="status">You were closer to 21 than the House. You won $' + bet + '.</div>';
     } else if ( playerPoints === housePoints ) {
          message = '<div id="status">You tied the House and your bet of $' + bet + ' was returned.</div>';
     }

     return message;

};

var updateCash = function(winner, cash, bet) {

     // Update Cash
     console.log('UPDATE CASH FUNCTION');
     if( winner === 'Player' ) {

          cash = updateCashWin(cash, bet);

     } else if( winner === 'House' ) {

          cash = updateCashLoss(cash, bet);

     } else if( winner === 'Tie' ) {

          cash = updateCashWin(cash, 0);

     }

     return cash;

};


/********************************
 * The Main Game Loop
 *
 *******************************/

var playHand = function(cash, bet) {

          console.log('START of Loop');
          console.log('Cash: ' + cash);

          //let's do it

          playerCards = [];
          playerPoints = [];
          houseCards = [];
          housePoints = [];

          // Hide Action Buttons Until the Bet is Placed
          document.getElementById("cash-out-button").style.display="none";
          document.getElementById("next-hand-button").style.display="none";
          document.getElementById("hit-me-button").style.display="none";
          document.getElementById("stand-button").style.display="none";
          document.getElementById("bet-amount-display").style.display="none";
          document.getElementsByClassName('action-buttons')[1].style.display="none";

          //Show the bet amount
          document.getElementById("bet-amount-display").style.display="block";
          document.getElementById("bet-amount-display").innerHTML = 'Your bet: $' + bet;

          /********************************
           * Deal the Hand
           *
           *******************************/

          var playerCards = [getCard(), getCard()];
          var playerPoints = [];

          var houseCards = [getCard(), getCard()];
          var housePoints = [];

          playerPoints = addCards( playerCards );
          housePoints = addCards( houseCards );

          console.log('Initial Player Cards: ' +  JSON.stringify(playerCards));
          console.log('Initial Player Points: ' +  playerPoints);
          console.log('Initial House Cards: ' +  JSON.stringify(houseCards));
          console.log('Initial House Points: ' +  housePoints);

               // Show the Player Cards
               for(i = 0; i < playerCards.length; i++) {

                    var displayTextCard = '<div class="single-card">' + playerCards[i].name + ' (' + playerCards[i].value + ')</div>';

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

                    document.getElementById('player-total-points').innerHTML = 'Total Points: ' + playerPoints;

               }

               // Show the House Cards

               for( var j = 0; j < houseCards.length; j++) {

                    // Display Card Image

                         //Determine red or black
                         var CardName = houseCards[j].name;
                         if( CardName.includes('Hearts') || CardName.includes('Diamonds') ) {
                              var cardClass = 'red';
                         } else {
                              var cardClass = 'black';
                         }

                    // For the House, only display the first card

                    if ( j === 1 ) {
                         console.log('HOUSE CARDS FIRST');
                         var hideCard = 'card-back';
                         var displayCardImage = '<div class="single-card-image ' + cardClass + ' ' + hideCard + '"><span class="card-content">' + houseCards[j].name + ' (' + houseCards[j].value + ')<div class="card-symbols">' + houseCards[j].symbol + '</span></div></div>';

                    } else {
                         var displayCardImage = '<div class="single-card-image ' + cardClass + '"><span class="card-content">' + houseCards[j].name + ' (' + houseCards[j].value + ')<div class="card-symbols">' + houseCards[j].symbol + '</span></div></div>';

                    }
                    
                    document.getElementById('house-display-cards').innerHTML += displayCardImage;

               }


               /********************************
                * Check for Naturals
                *
                *******************************/

                var playerNaturalCheck = naturalCheck( playerCards );
                var houseNaturalCheck = naturalCheck( houseCards );

                if( (playerNaturalCheck === 'natural') && (houseNaturalCheck === 'natural') ) {

                     document.getElementsByClassName('action-buttons')[0].style.display="none";
                     document.getElementsByClassName('game-notices')[0].innerHTML += '<div id="status">You both got natural Blackjacks! Your bet of ' + bet + ' is returned.</div>';
                     cash = updateCashWin(cash, 0);
                     winner = 'Tie';

                     document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                     document.getElementById("cash-out-button").style.display="inline-block";
                     document.getElementById("next-hand-button").style.display="inline-block";

                } else if( playerNaturalCheck === 'natural' ) {

                     var naturalBet = bet * 1.5;
                     bet = (bet + bet/2);
                     document.getElementsByClassName('action-buttons')[0].style.display="none";
                     document.getElementsByClassName('game-notices')[0].innerHTML += '<div id="status">You got a natural Blackjack! You won $' + naturalBet + '.</div>';
                     cash = updateCashWin(cash, bet);
                     winner = 'Player';

                     document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                     document.getElementById("cash-out-button").style.display="inline-block";
                     document.getElementById("next-hand-button").style.display="inline-block";

                } else if( houseNaturalCheck === 'natural' ) {

                     document.getElementsByClassName('action-buttons')[0].style.display="none";
                     document.getElementById("hit-me-button").style.display="none";
                     document.getElementById("stand-button").style.display="none";

                     document.getElementsByClassName('game-notices')[0].innerHTML += '<div id="status">The House got a natural Blackjack! You lost $' + bet + '.</div>';
                     cash = updateCashLoss(cash, bet);
                     winner = 'House';

                     document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                     document.getElementById("cash-out-button").style.display="inline-block";
                     document.getElementById("next-hand-button").style.display="inline-block";

                } else {

                // Add action buttons
                document.getElementsByClassName('action-buttons')[0].style.display="inline-block";
                document.getElementById("hit-me-button").style.display="inline-block";
                document.getElementById("stand-button").style.display="inline-block";

               }


                /********************************
                 * Check for Double Aces
                 *
                 *******************************/

                 if( (playerPoints === 22) && (acesCheck(playerCards)) === true ) {
                      playerPoints -= 10;
                 }

                 if( (housePoints === 22) && (acesCheck(houseCards)) === true ) {
                      housePoints -= 10;
                 }


                 /********************************
                 * Opportunity to Double Down
                 *
                 *******************************/

                 if( (playerPoints === 9 || playerPoints === 10 || playerPoints === 11 ) && (cash >= bet*2) ) {

                      document.getElementsByClassName('game-notices')[0].innerHTML += '<div id="status">Would you like to double-down? <a href="#" id="double-down" class="nice-button">Yes</a></div>';

                      var doubleDown = document.getElementById("double-down");
                      doubleDown.addEventListener( 'click', doubleDownUpdateBet, false );

                      function doubleDownUpdateBet(e) {

                           event.preventDefault();
                           bet = bet * 2;
                           console.log('New Bet (Double Down): $' + bet);

                           doubleDown.removeEventListener( 'click', doubleDownUpdateBet, false );
                           document.getElementById("bet-amount-display").innerHTML = 'Your bet: $' + bet;
                           document.getElementsByClassName('game-notices')[0].innerHTML = '';


                      }

                 }


                 /********************************
                 * Hit Me Functionality
                 *
                 *******************************/


                 var hitMeButton = document.getElementById("hit-me-button");
                 hitMeButton.addEventListener( 'click', hitMe, false );

                 function hitMe(e) {

                    //Get New Card
                         var hitMeCard = null;
                      hitMeCard = getCard();

                      playerCards.push( hitMeCard );

                      var hitMeCardValue = hitMeCard.value;

                      playerPoints = addCards( playerCards );

                      console.log('HIT ME TOTAL: ' + playerPoints);


                      // Display Card Image

                           //Determine red or black
                           var newCardName = hitMeCard.name;
                           if( newCardName.includes('Hearts') || newCardName.includes('Diamonds') ) {
                                var cardClass = 'red';
                           } else {
                                var cardClass = 'black';
                           }

                           console.log(hitMeCard);

                      var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + hitMeCard.name + ' (' + hitMeCard.value + ')<div class="card-symbols">' + hitMeCard.symbol + '</div></div>';
                      document.getElementById('player-display-cards').innerHTML += displayCardImage;


                      //Aces Check
                      if( (acesCheck(playerCards) === true) && (playerPoints > 21) ) {
                           console.log('Player Aces? ' + acesCheck(playerCards));
                           playerPoints -= 10;
                      }

                      document.getElementById('player-total-points').innerHTML = 'Total points: ' + playerPoints;

                      console.log('Updated Player Point Total: ' + playerPoints);
                      console.log('Updated Player Cards: ' +  JSON.stringify(playerCards));

                           // Don't Allow hits if player has Blackjack
                           if( playerPoints === 21 ) {

                                hitMeButton.removeEventListener( 'click', hitMe, false );


                           }

                           // HAND IS OVER, Don't Allow hits if player is Busted
                           if( playerPoints > 21 ) {

                                console.log(' ---------- HAND OVER -------------- ');

                                hitMeButton.removeEventListener( 'click', hitMe, false );

                                document.getElementsByClassName('action-buttons')[0].style.display="none";
                                document.getElementById("hit-me-button").style.display="none";
                                document.getElementById("stand-button").style.display="none";

                                // Process winner and add action buttons back in there
                                var winner = determineWinner(playerPoints, housePoints);
                                var message = handOverMessage(playerPoints, housePoints, bet);
                                document.getElementsByClassName('game-notices')[0].innerHTML = message;
                                cash = updateCash(winner, cash, bet);
                                document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;

                                document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                                document.getElementById("cash-out-button").style.display="inline-block";
                                document.getElementById("next-hand-button").style.display="inline-block";




                           }


                      }


                      /********************************
                      * Stand Functionality
                      *
                      *******************************/

                      var standButton = document.getElementById("stand-button");
                      standButton.addEventListener( 'click', stand, false );

                      function stand(e) {

                           event.preventDefault();

                           hitMeButton.removeEventListener( 'click', hitMe, false );

                           //Hide action Buttons
                           document.getElementsByClassName('action-buttons')[0].style.display="none";
                           //document.getElementsByClassName('game-notices')[0].innerHTML = '<div id="status">Stand!</div>';

                           /********************************
                            * Now it's the House's turn
                            *
                            *******************************/

                                 //Show second hidden card once the dealer plays
                                 var secondHouseCardParent = document.getElementById('house-display-cards');
                                 var secondHouseCard = secondHouseCardParent.children[1];
                                 secondHouseCard.classList.remove("card-back");

                                 document.getElementById('house-total-points').innerHTML = 'Total points: ' + housePoints;

                           for (; housePoints < 17; ) {

                                var newHouseCard = getCard();
                                houseCards.push( newHouseCard );
                                var newHouseCardValue = newHouseCard.value;

                                housePoints = addCards( houseCards );

                                    //Aces Check
                                   //  if( (acesCheck(houseCards) === true) && (housePoints > 21) ) {
                                   //       console.log('House Aces? ' + acesCheck(houseCards));
                                   //       housePoints -= 10;
                                   //  }


                                console.log('Updated House Point Total: ' + housePoints);
                                console.log('Updated House Cards: ' +  JSON.stringify(houseCards));

                                document.getElementById('house-total-points').innerHTML = 'Total points: ' + housePoints;

                                // Display Card Image

                                     //Determine red or black
                                     var newCardName = newHouseCard.name;
                                     if( newCardName.includes('Hearts') || newCardName.includes('Diamonds') ) {
                                          var cardClass = 'red';
                                     } else {
                                          var cardClass = 'black';
                                     }

                                var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + newHouseCard.name + ' (' + newHouseCard.value + ')<div class="card-symbols">' + newHouseCard.symbol + '</div></div>';
                                document.getElementById('house-display-cards').innerHTML += displayCardImage;

                                   /********************************
                                     * If player stands, see who won and update everything according
                                     *
                                     *******************************/

                                   if( housePoints >= 17 ) {

                                        console.log(' ---------- HAND OVER -------------- ');

                                        // Process winner and add action buttons back in there
                                        standButton.removeEventListener( 'click', stand, false );
                                        var winner = determineWinner(playerPoints, housePoints);
                                        var message = handOverMessage(playerPoints, housePoints, bet);
                                        document.getElementsByClassName('game-notices')[0].innerHTML = message;
                                        cash = updateCash(winner, cash, bet);
                                        document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;

                                        document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                                        document.getElementById("cash-out-button").style.display="inline-block";
                                        document.getElementById("next-hand-button").style.display="inline-block";

                                   }



                              }


                              if( houseCards.length === 2 ) {

                                   console.log(' ---------- HAND OVER -------------- ');

                                   // Process winner and add action buttons back in there
                                   standButton.removeEventListener( 'click', stand, false );
                                   var winner = determineWinner(playerPoints, housePoints);
                                   var message = handOverMessage(playerPoints, housePoints, bet);
                                   document.getElementsByClassName('game-notices')[0].innerHTML = message;
                                   cash = updateCash(winner, cash, bet);
                                   document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;

                                   document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                                   document.getElementById("cash-out-button").style.display="inline-block";
                                   document.getElementById("next-hand-button").style.display="inline-block";

                              }


                         }

          // console.log('Cash array: ' + cashArray);
          // console.log('Cards in the Deck remaining: ' + cards.length);
          // console.log('Winner: ' + winner);
          //
          document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;

}

var handSetup = function() {

     if( cash > 0 ) {

          // Hide buttons until they are needed
          document.getElementById("cash-out-button").style.display="none";
          document.getElementById("next-hand-button").style.display="none";
          document.getElementById("hit-me-button").style.display="none";
          document.getElementById("stand-button").style.display="none";

          // Set default bet amount, can be changed by user
          betAmountDefault = document.getElementById( 'bet-amount' );
          betAmountDefault.value = 50;

          var placeBet = document.getElementById("the-bet");
          placeBet.addEventListener( 'submit', returnBetAmount, false );

          function returnBetAmount(e) {

               event.preventDefault();
               betAmount = document.getElementById( 'bet-amount' );
               bet = parseInt(betAmount.value);

               //Hide the bet amount form
               placeBet.style.display="none";

               console.log('Bet Amount: $' + bet);

                    // Loop that actually plays a hand
                    if( bet > 0 ) {

                         cash = cashArray[cashArray.length - 1];
                         console.log('handSetup cash array: ' + cash);

                         console.log('right before calling playHand(): ' + cash);

                         playHand(cash, bet);

                         // Get setup for the next hand

                         // document.getElementById("cash-out-button").style.display="inline-block";
                         // document.getElementById("next-hand-button").style.display="inline-block";

                         var nextHandButton = document.getElementById("next-hand-button");
                         nextHandButton.addEventListener( 'click', nextHand, false );

                         function nextHand( event ) {

                              event.preventDefault();

                              // Reset Everything
                              document.getElementsByClassName('game-notices')[0].innerHTML = '';
                              document.getElementById("next-hand-button").style.display="none";
                              document.getElementById("cash-out-button").style.display="none";
                              document.getElementById("bet-amount-display").style.display="none";
                              placeBet.style.display="block";
                              document.getElementById('player-display-cards').innerHTML = '';
                              document.getElementById('house-display-cards').innerHTML = '';
                              document.getElementById('player-total-points').innerHTML = '';
                              document.getElementById('house-total-points').innerHTML = '';

                              console.log("RESET");

                         }

                    }

               }

          }

}

handSetup();

//console.log('END OF GAME. OUTSIDE LOOP. You have cashed out!');
