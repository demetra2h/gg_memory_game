console.log('js loaded!');

function Card(className) {
  this.className = className;
  this.matched   = false; // because it's the start of the game
}

// the basic construction of the game when it's started

var pairs       = 0; // there hasnt been a card, pulled yet
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
// reloading the page when the start button is clicked.
// start again

$("#start").on('click', function(event) {
  location.reload(true);
});
// if the first cliack and the second are the same they
// they return true.
function matchedCards() {
  if (board[firstClick].className === board[secondClick].className) {
    board[firstClick].matched  = true;
    board[secondClick].matched = true;
    return true;
  }
}
// if you have six matches you won. if the pairs are strictly
// equal to each other
function gameWon() {
  if (pairs === 6) {
    alert("You Won!");
    clearBoard();
    return true;
  } else {
    return false;
  }
}

// clear board function
function clearBoard() {
  shuffleBoard(cards);
  console.log(cards);
}

// clicks
function assignChoice(index) {
  if (firstClick === null) {
    firstClick = index;
  } else if(secondClick === null) {
    secondClick = index;
  }
}
// if there isn't a match then they turn back over because they
// are both null
function clearChoice() {
  if (firstClick !== null && secondClick !== null){
    firstClick  = null;
    secondClick = null;
  }
}

// clicking of the cells and the cards that are called.
// keeping track of the clicks, attempts, by dividing them by 2
// because you click on two things to choose.
$(".card").on("click", function(evt) {
  var card  = evt.target.id;
  var index = card.slice(-2);
//
  index = parseInt(index);
  assignChoice(index);
  if (board[index].matched === false) {
    clickCount++;
    if (clickCount % 2 === 0) {
      $("#clicks").text((clickCount/2) + " guesses");
    }
    $(evt.target).addClass(board[index].className);
    $(evt.target).addClass("opaque");

    if (firstClick !== null && secondClick !== null) {
      if (matchedCards() === true) {
        pairs += 1;
        gameWon();
        clearChoice();
      } else {
        setTimeout(function() {
          var ind1 = firstClick;
          var ind2 = secondClick;
// needed to change because there are two places for the
// cell index, so, if the card that is called is less than
// 10 we will have to add the 0 in front of its index. don't
// need to do this with the ones that have two decimal places
//that's why we have two different trypes of index
          if (ind1 < 10) {
            ind1 = "0" + firstClick;
          }
          if (ind2 < 10) {
            ind2 = "0" + secondClick;
          }
          $("#cell" + ind1).removeClass(board[firstClick].className);
          $("#cell" + ind1).removeClass("opaque");
          $("#cell" + ind2).removeClass(board[secondClick].className);
          $("#cell" + ind2).removeClass("opaque");
          clearChoice();
        }, 1000);
      }
    }
  }
});

