console.log(js loaded!)
//the basic construction of the game when it's started

var OpenCell = ""; //empty box
var OpenCard = ""; //the image that is going to be placed
var CardPulled = 0; //there hasnt been an image, or card, pulled yet
var TurnCounter = 0; //starts at zero for a new game

//this is the cards array, there are 6 being repeated twice
  var card =
  [
  url("../images/emily.jpg");
  url("../images/jess.jpg");
  url("../images/lorelai.jpg");
  url("../images/richard.jpg");
  url("../images/rory.jpg");
  url("../images/sookie.jpg");
  url("../images/emily.jpg");
  url("../images/jess.jpg");
  url("../images/lorelai.jpg");
  url("../images/richard.jpg");
  url("../images/rory.jpg");
  url("../images/sookie.jpg");
  ]

//need to put the empty cells here
function OpenCell() {
  var open =
  [
  "", "", "", "",
  "", "", "", "",
  "", "", "", ""
  ]
};

//start with randomizing the image array function
function RandomFunction(MaxValue, MinValue) {
  return Math.round(Math.random() *
    (MaxValue - MinValue) + MinValue);
}


//shuffling of the cards using a for loop allImg.length is the
//image array written above
function shuffleArray(card) {
  for (var i = card.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = card[i];
    card[i] = card[j];
    card[j] = temp;
  }

}


//click action
$("card").each(function(index, card) {
  console.log( index + "; " + $( this ).text() );
});

//pulling of the cards
function pullCard(){


}



//set a time interval for the cards when they are face up
setTimeout(function(){
  $(".card").remove()

})

//callback function
var getCard = document.getElementById('getCard');

getCard.addEventListener(click(function(event) {
  alert('clicked')
});

//start of the game
game.start = function( {

})


//if else statement for a guess




//turn counter??



//play game button



//clear board function



