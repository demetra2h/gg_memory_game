console.log(js loaded!)
//the basic construction of the game when it's started
var OpenCell = ""; //empty box
var OpenCard = ""; //the image that is going to be placed
var TurnCounter = 0; //starts at zero for a new game
var CardPulled = 0; //there hasnt been an image pulled yet

//this is the cards array, there are 6 being repeated twice
function addCard() {
  var card =
  [
  url("../images/emily.jpg");
  url("..images/jess.jpg");
  url("..images/lorelai.jpg");
  url("../images/richard.jpg");
  url("../images/rory.jpg");
  url("../images/sookie.jpg");
  ]
}

//start with random math shuffle function
function RandomFunction(MaxValue, MinValue) {
  return Math.round(Math.random() *
    (MaxValue - MinValue) + MinValue);
}

//variables of the cards to be shuffled and the shuffling
function shuffleCards() {
  var allCard = $(source).children();
  var thisCard = $(source + " div:first-child");
  var arrCard = new array();
//shuffling of the cards using a for loop allImg.length is the
//image array written above
  for (var i = 0; i < allCard.length; i++) {
    arrCard[i] = $("#" + thisCard.attr("id") +
      "card").attr("src");
    thisCard = thisCard.next();
  }

}
//click action



//set a time interval for the cards when they are face up



//turn counter



//reset button
