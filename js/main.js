console.log('js loaded!');

function Card(className) {
  this.className = className;
  this.turned    = false;
  this.matched   = false; // because it's the start of the game
}

// the basic construction of the game when it's started

var cardPulled  = 0; // there hasnt been a card, pulled yet
var turnCounter = 0; // starts at zero for a new game
var clickCount  = 0; // How many times they clicked

var firstClick = null;
var secondClick = null;

// this is the cards array, there are 6 being repeated twice
// the character name's are the classes of the cards
var board = [
  new Card("emily"),
  new Card("jess"),
  new Card("lorelai"),
  new Card("richard"),
  new Card("rory"),
  new Card("sookie"),
  new Card("emily"),
  new Card("jess"),
  new Card("lorelai"),
  new Card("richard"),
  new Card("rory"),
  new Card("sookie")
];

// shuffling of the cards
// the board array is written above
function shuffleBoard() {
  var currentIndex = board.length,
      temporaryValue,
      randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--; //amount of cards

    // And swap it with the current element.
    temporaryValue      = board[currentIndex];
    board[currentIndex] = board[randomIndex];
    board[randomIndex]  = temporaryValue;
  }
}

shuffleBoard();

// click action for the class of the cell, where the
// cards are going to show up


// if the cards match they stay face up
// if they don't they go back



function matchedCards() {
  return firstClick === secondClick;
}


// clear board function
function clearBoard() {
  shuffleBoard(cards);
  console.log(cards);
}

function assignChoice(index) {
  if (firstClick === null) {
    firstClick = index;
  } else if(secondClick === null) {
    secondClick = index;
  }
}

function clearChoice() {
  if (firstClick !== null && secondClick !== null){
    firstClick  = null;
    secondClick = null;
  }
}








$(".card").on("click", function(evt) {
  console.log(evt.target); // just checking if the class is working
  clickCount++;
  if (clickCount % 2 === 0) {
    $("#clicks").text((clickCount/2) + " Attempts");
  }
  var card  = evt.target.id;
  var index = card.slice(-2);
  index = parseInt(index);
  $(evt.target).addClass(board[index].className);
  $(evt.target).addClass("opaque");
// time that the cards are flipped over and then go back
  setTimeout(function() {
    $(evt.target).removeClass(board[index].className);
    $(evt.target).removeClass("opaque");
  }, 500);
});

