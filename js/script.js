// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
userChoice = "";
var computerChoice;
computerChoice = "";
var winner;
winner = "";
var randomNumber = Math.random();


// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
  $("#userChoice").text($("#input").val());
});

if (randomNumber < .33)
{
      computerChoice= "rock"; 
}
else if (randomNumber > .66)
{
      computerChoice= "paper"; 
}
else
{
    computerChoice= "scissors";
}
  $("#computerChoice").text(computerChoice)   


