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
  url("../images/jess.jpg");
  url("../images/lorelai.jpg");
  url("../images/richard.jpg");
  url("../images/rory.jpg");
  url("../images/sookie.jpg");
  ]
}

//need to put the empty cells here
function OpenCell = [
  "", "", "", "",
  "", "", "", "",
  "", "", "", ""
  ]

//start with randomizing the array function
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
//fisher yates shuffle algorithm
function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

//click action
$("card").each(function(index, card) {
  console.log( index + "; " + $( this ).text() );
});


//set a time interval for the cards when they are face up



//if else statement



//turn counter



//reset button



//clear board function



