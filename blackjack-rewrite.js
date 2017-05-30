/********************************
Blackjack Total Re-Write
Starting Over on Tues May 30
Let's Do This
*******************************/

// Setup Vars

     var playerName,
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

//Let's get started - Player Name
     //playerName = window.prompt( 'Please enter your name:' );
     playerName = 'Chris';

          if(!playerName) {
               playerName = 'Player One';
          }

     document.getElementById('player-name').innerHTML = playerName;
     document.getElementById('cash').innerHTML += cash;


// Some Math Functions

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}


// Setup the Cards

var cards = [];

// Let's play with k decks of cards
for(var k=0; k < 1; k++) {

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


var dealHand = function() {

     playerCards = [getCard(), getCard()];
     playerPoints = addCards( playerCards );

     houseCards = [getCard(), getCard()];
     housePoints = addCards( houseCards );

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



var naturalCheck = function( cardArray ) {

     points = addCards( cardArray );

     if( points === 21 ) {
          var natural = 'natural';
          console.log( 'Natural - YEP');
          console.log('NATURAL CHECK: ' + JSON.stringify(cardArray));
          return natural;
     }

     else {
          return;
     }

};




var determineWinner = function(playerPoints, housePoints) {

     // Determine Winner of hand
     if( playerPoints > 21 ) {
          winner = 'House';
          console.log('House Condition 1');
     } else if ( housePoints > 21 && playerPoints <= 21 ) {
          winner = 'Player';
          console.log('Player Condition 2');
     } else if ( housePoints <= 21 && housePoints > playerPoints ) {
          winner = 'House';
          console.log('House Condition 3');
     } else if ( playerPoints <= 21 && playerPoints > housePoints ){
          winner = 'Player';
          console.log('Player Condition 4');
     } else if ( playerPoints === housePoints ) {
          winner = 'Tie';
          console.log('Tie Condition 5');
     }

     console.log('And the winner is: ' + winner);

     return winner;

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



var handOverMessage = function(playerPoints, housePoints, bet) {

     var message;

     // Determine Winner of hand
     if( playerPoints > 21 ) {
          message = '<div id="status">You busted and lost your bet of $' + bet + '.</div>';
     } else if ( housePoints > 21 && playerPoints <= 21) {
          message = '<div id="status">The House busted. You won $' + bet + '.</div>';
     } else if ( housePoints <= 21 && housePoints > playerPoints ) {
          message = '<div id="status">The House was closer to 21 and you lost your bet of $' + bet + '.</div>';
     } else if ( playerPoints < 21 && playerPoints > housePoints ){
          message = '<div id="status">You were closer to 21 than the House. You won $' + bet + '.</div>';
     } else if ( playerPoints === 21 && playerPoints > housePoints ){
          message = '<div id="status">You got Blackjack! You won $' + bet + '.</div>';
     } else if ( playerPoints === housePoints ) {
          message = '<div id="status">You tied the House and your bet of $' + bet + ' was returned.</div>';
     }

     return message;

};





var gameOver = function() {

     document.getElementById("cash-out-button").style.display="none";
     document.getElementById("next-hand-button").style.display="none";
     document.getElementById("hit-me-button").style.display="none";
     document.getElementById("stand-button").style.display="none";
     document.getElementById("bet-amount-display").style.display="none";
     document.getElementsByClassName('action-buttons')[1].style.display="none";

     document.getElementsByClassName('game-notices')[0].innerHTML += '<div id="status">You have lost everything. Game Over!</div>';

};



/********************************
 * The Main Game Loop
 *
 *******************************/

var newHand = function( cash ) {

          if( cash === 0 ) {
               window.alert('You are out of money. Game over.');
               return;
          }

     // Set default bet amount, can be changed by user
     betAmountDefault = document.getElementById( 'bet-amount' );
     betAmountDefault.value = 100;

     document.getElementById("cash-out-button").style.display="none";
     document.getElementById("next-hand-button").style.display="none";
     document.getElementById("hit-me-button").style.display="none";
     document.getElementById("stand-button").style.display="none";
     document.getElementById("bet-amount-display").style.display="none";
     document.getElementsByClassName('action-buttons')[0].style.display="none";
     document.getElementsByClassName('action-buttons')[1].style.display="none";

     //Show the bet amount
     document.getElementById("bet-amount-display").style.display="block";

     var placeBet = document.getElementById("the-bet");
     placeBet.addEventListener( 'submit', returnBetAmount, false );

     function returnBetAmount(e) {

          event.preventDefault();
          var betAmount = document.getElementById( 'bet-amount' );
          bet = parseInt(betAmount.value);

               if( bet > cash ) {

                    window.alert('Your bet must be less than or equal to your cash on hand.');
                    return;

               }

          //Hide the bet amount form
          placeBet.style.display="none";

          console.log('Bet Amount: $' + bet);
          document.getElementById("bet-amount-display").style.display="block";
          document.getElementById("bet-amount-display").innerHTML = 'Your bet: $' + bet;


          //Trying this with an external function instead
          dealHand();

          console.log('START of Loop');
          console.log('Cash: ' + cash);
          console.log('Initial Player Cards: ' +  JSON.stringify(playerCards));
          console.log('Initial Player Points: ' +  playerPoints);
          console.log('Initial House Cards: ' +  JSON.stringify(houseCards));
          console.log('Initial House Points: ' +  housePoints);
          console.log('Remaining cards: ' +  cards.length);


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

                document.getElementsByClassName('action-buttons')[0].style.display="inline-block";
                document.getElementById("cash-out-button").style.display="inline-block";
                document.getElementById("next-hand-button").style.display="inline-block";

                document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;

           } else if( playerNaturalCheck === 'natural' ) {

                var naturalBet = bet * 1.5;
                bet = (bet + bet/2);
                document.getElementsByClassName('action-buttons')[0].style.display="none";
                document.getElementsByClassName('game-notices')[0].innerHTML += '<div id="status">You got a natural Blackjack! You won $' + naturalBet + '.</div>';
                cash = updateCashWin(cash, bet);
                winner = 'Player';

                document.getElementsByClassName('action-buttons')[0].style.display="inline-block";
                document.getElementById("cash-out-button").style.display="inline-block";
                document.getElementById("next-hand-button").style.display="inline-block";

                document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;

           } else if( houseNaturalCheck === 'natural' ) {

                     //Show second hidden card once the dealer plays
                     var secondHouseCardParent = document.getElementById('house-display-cards');
                     var secondHouseCard = secondHouseCardParent.children[1];
                     secondHouseCard.classList.remove("card-back");

                document.getElementById('house-total-points').innerHTML = 'Total points: ' + housePoints;

                document.getElementsByClassName('action-buttons')[0].style.display="none";
                document.getElementById("hit-me-button").style.display="none";
                document.getElementById("stand-button").style.display="none";

                document.getElementsByClassName('game-notices')[0].innerHTML += '<div id="status">The House got a natural Blackjack! You lost $' + bet + '.</div>';
                cash = updateCashLoss(cash, bet);
                winner = 'House';

                document.getElementsByClassName('action-buttons')[0].style.display="inline-block";
                document.getElementById("cash-out-button").style.display="inline-block";
                document.getElementById("next-hand-button").style.display="inline-block";

                document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;

           } else {

           // Add action buttons
           document.getElementsByClassName('action-buttons')[0].style.display="inline-block";
           document.getElementById("hit-me-button").style.display="inline-block";
           document.getElementById("stand-button").style.display="inline-block";

          }



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

          console.log('Before HIT ME Player Cards: ' +  JSON.stringify(playerCards));
          console.log('Before HIT ME House Cards: ' +  JSON.stringify(houseCards));

          function hitMe(e) {

               //event.preventDefault();

               // Remove Double Down Option if it was there in the first place
               if( (playerPoints === 9 || playerPoints === 10 || playerPoints === 11 ) && (cash >= bet*2) ) {

                    doubleDown.removeEventListener( 'click', doubleDownUpdateBet, false );
                    document.getElementsByClassName('game-notices')[0].innerHTML = '';

               }

               console.log('Start of HIT ME Player Cards: ' +  JSON.stringify(playerCards));
               console.log('Start of HIT ME House Cards: ' +  JSON.stringify(houseCards));

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

               console.log('MIDDLE of HIT ME Player Cards: ' +  JSON.stringify(playerCards));
               console.log('MIDDLE of HIT ME House Cards: ' +  JSON.stringify(houseCards));

               if( playerPoints < 21 ) {
                    return;
               }

               else if( playerPoints === 21 ) {

                    console.log(' ---------- HAND OVER -------------- ');

                    // Process winner and add action buttons back in there
                    hitMeButton.removeEventListener( 'click', hitMe, false );
                    var winner = determineWinner(playerPoints, housePoints);
                    var message = handOverMessage(playerPoints, housePoints, bet);
                    document.getElementsByClassName('game-notices')[0].innerHTML = message;
                    cash = updateCash(winner, cash, bet);
                    document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;

                    document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                    document.getElementById("cash-out-button").style.display="inline-block";
                    document.getElementById("next-hand-button").style.display="inline-block";

                    console.log('END of HIT ME Player Cards - Player AT 21 loop: ' +  JSON.stringify(playerCards));
                    console.log('END of HIT ME House Cards - House ??? 21 loop: ' +  JSON.stringify(houseCards));


                    }

                    // HAND IS OVER, Don't Allow hits if player is Busted
                    else if( playerPoints > 21 ) {

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

                         console.log('END of HIT ME Player Cards - Player over 21 loop: ' +  JSON.stringify(playerCards));
                         console.log('END of HIT ME House Cards - House over 21 loop: ' +  JSON.stringify(houseCards));

                         // Check if the Game is Over
                         if( cash <= 0 ) {
                              gameOver();
                         }


                    }

                    console.log('END of HIT ME Player Cards: ' +  JSON.stringify(playerCards));
                    console.log('END of HIT ME House Cards: ' +  JSON.stringify(houseCards));



               }

               console.log('Before STAND EVENT LISTENER House Cards: ' +  JSON.stringify(houseCards));





          /********************************
          * Stand Functionality
          *
          *******************************/

          var standButton = document.getElementById("stand-button");
          standButton.addEventListener( 'click', stand, false );

          console.log('Right before STAND House Cards: ' +  JSON.stringify(houseCards));

          function stand(e) {

               event.preventDefault();
               hitMeButton.removeEventListener( 'click', hitMe, false );
               standButton.removeEventListener( 'click', stand, false );
               //hitMeButton.removeEventListener( 'click', hitMe, false );

               document.getElementById("hit-me-button").style.display="none";
               document.getElementById("stand-button").style.display="none";

               var standAction = function(playerCards, houseCards) {



               // House too many cards problem is right HERE
               // houseCards is getting the wrong variables from a past hand
               // Need to make sure it's getting the correct cards


               console.log('NEW TEST FUNCTION STAND House Cards SHOULD ONLY RUN ONCE: ' +  JSON.stringify(houseCards));





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

                    console.log('BEFORE House Loop under 17 Pts: ' +  JSON.stringify(houseCards));

               for (; housePoints < 17; ) {

                    console.log('START of House Loop under 17 Pts: ' +  JSON.stringify(houseCards));

                    var newHouseCard = getCard();
                    houseCards.push( newHouseCard );
                    var newHouseCardValue = newHouseCard.value;

                    housePoints = addCards( houseCards );

                        // Aces Check
                        if( (acesCheck(houseCards) === true) && (housePoints > 21) ) {
                            console.log('House Aces? ' + acesCheck(houseCards));
                            housePoints -= 10;
                        }


                    console.log('Updated House Point Total: ' + housePoints);
                    console.log('Updated House Cards: ' +  JSON.stringify(houseCards));

                    document.getElementById('house-total-points').innerHTML = 'Total points: ' + housePoints;

                    // Display Card Image

                            var newHouseCardName = null;

                         //Determine red or black
                         newHouseCardName = newHouseCard.name;
                         if( newHouseCardName.includes('Hearts') || newHouseCardName.includes('Diamonds') ) {
                              var cardClass = 'red';
                         } else {
                              var cardClass = 'black';
                         }

                    var displayCardImage = '<div class="single-card-image ' + cardClass + '">' + newHouseCardName + ' (' + newHouseCardValue + ')<div class="card-symbols">' + newHouseCard.symbol + '</div></div>';
                    document.getElementById('house-display-cards').innerHTML += displayCardImage;
                    console.log('Displayed House Cards: ' +  JSON.stringify(newHouseCardName));

                       /********************************
                         * If player stands, see who won and update everything according
                         *
                         *******************************/

                    //    if( housePoints >= 17 ) {
                       //
                    //         console.log(' ---------- HAND OVER -------------- ');
                       //
                       //
                    //         // Process winner and add action buttons back in there
                    //         standButton.removeEventListener( 'click', stand, false );
                    //         var winner = determineWinner(playerPoints, housePoints);
                    //         var message = handOverMessage(playerPoints, housePoints, bet);
                    //         document.getElementsByClassName('game-notices')[0].innerHTML = message;
                    //         cash = updateCash(winner, cash, bet);
                    //         document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;
                       //
                    //         document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                    //         document.getElementById("cash-out-button").style.display="inline-block";
                    //         document.getElementById("next-hand-button").style.display="inline-block";
                       //
                       //
                       //
                    //    }


                  }


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

            standAction(playerCards, houseCards);

                    //Let's determine who won the hand
                    // var winner = determineWinner(playerPoints, housePoints);
                    //
                    // var message = handOverMessage(playerPoints, housePoints, bet);
                    // document.getElementsByClassName('game-notices')[0].innerHTML = message;
                    //
                    // cash = updateCash(winner, cash, bet);
                    // document.getElementById("cash").innerHTML = 'Your Cash: $' + cash;
                    //
                    // document.getElementsByClassName('action-buttons')[1].style.display="inline-block";
                    // document.getElementById("cash-out-button").style.display="inline-block";
                    // document.getElementById("next-hand-button").style.display="inline-block";

                    // Check if the Game is Over
                    if( cash <= 0 ) {
                         gameOver();
                    }

               }



               var nextHandButton = document.getElementById("next-hand-button");
               nextHandButton.addEventListener( 'click', nextHand, false );

               function nextHand( event ) {

                    event.preventDefault();

                    // Reset Everything
                    document.getElementsByClassName('game-notices')[0].innerHTML = '';
                    document.getElementsByClassName('action-buttons')[0].style.display="none";
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

if( cash > 0 ) {
     newHand( cash );
     console.log('START GAME');
}
