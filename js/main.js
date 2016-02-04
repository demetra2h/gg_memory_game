console.log('js loaded!');
//the basic construction of the game when it's started

var OpenCell = ""; //empty box
var OpenCard = ""; //the image that is going to be placed
var CardPulled = 0; //there hasnt been a card, pulled yet
var TurnCounter = 0; //starts at zero for a new game
//
var Card = function(className) {
  this.className = className;
  this.matched = false; //because it's the start of the game
}

//this is the cards array, there are 6 being repeated twice
//these are the classes of the cards, the character name
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

//need to put the empty cells here
//they need to be filled the cards, board
function openCell() {
  var open =
  [
    "cell0", "cell1", "cell2", "cell3",
    "cell4", "cell5", "cell6", "cell7",
    "cell8", "cell9", "cell10", "cell11"
  ]
};

//shuffling of the cards
//the board array is written above
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

//click action for the class of the cell, where the
//cards arae going to show up

$(".card").each(function(index, card) {
  $(this).on("click", function(){
    //console.log('click!'); just checking if the class is working
  });
  // console.log( index + "; " + $( this ).text() );
});

//pulling of the cards
function pullCard(){
  $(".card").each(function(index, card) {
    $(this).on()
  });

}



// //set a time interval for the cards when they are face up
setTimeout(function(){
 $(".card").remove();
})

//callback function
// var getCard = document.getElementById('getCard');

// getCard.addEventListener("click", function(event) {
//  alert('clicked')
// });

game = {};

// //start of the game
game.start = function() {
};
// });


//turn counter??
//play game button
//clear board function



