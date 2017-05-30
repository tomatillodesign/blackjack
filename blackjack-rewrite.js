/********************************
Blackjack Total Re-Write
Starting Over on Tues May 30
Let's Do This
*******************************/

// Setup Vars

     var playerName,
     cash = 200,
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
     document.getElementsByClassName('action-buttons')[1].style.display="none";

     //Show the bet amount
     document.getElementById("bet-amount-display").style.display="block";

     var placeBet = document.getElementById("the-bet");
     placeBet.addEventListener( 'submit', returnBetAmount, false );

     function returnBetAmount(e) {

          event.preventDefault();
          var betAmount = document.getElementById( 'bet-amount' );
          bet = parseInt(betAmount.value);

               if(bet > cash) {

                    window.alert('Your bet must be less than or equal to your cash on hand.');
                    return;

               }

          //Hide the bet amount form
          placeBet.style.display="none";

          console.log('Bet Amount: $' + bet);
          document.getElementById("bet-amount-display").innerHTML = 'Your bet: $' + bet;

          cash -= bet;

     }

}

for (step = 0; step < 5; step++) {
     newHand( cash );
}
