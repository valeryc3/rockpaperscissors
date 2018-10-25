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
      $(computerChoice).css("color", "orange");
}
else if (randomNumber > .66)
{
      computerChoice= "paper"; 
       $(computerChoice).css("color", "green");
}
else
{
    computerChoice= "scissors";
     $(computerChoice).css("color", "red");
}
  $("#computerChoice").text(computerChoice)   


$("button").hover(function(){
  $("button").css("background-color", "blue") 
   $("button").css("color", "white") 
})