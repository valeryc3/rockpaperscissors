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

console.log($("#userChoice").val())
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
$("#shoot").click(function() {
  $("#userChoice").text($("#input").val());
  userChoice = $("#input").val();
  console.log('input', userChoice)
   $("#computerChoice").text(computerChoice); 
       if (userChoice == "rock" && computerChoice =="scissors") 
    {
        
            
             $("#result").text("User Wins");
             
       }
     if (userChoice =="rock" && computerChoice =="paper")
         {
          
             $("#result").text("Computer Wins");    
         }
         if (userChoice =="rock" && computerChoice=="rock")
         {
          
             $("#result").text("Tie");    
         }
  if(userChoice == "paper" && computerChoice=="rock") 
    {
        
              $("#result").text("User Wins");
       }
         else if (userChoice =="paper" && computerChoice=="scissors")
         {
          
           $("#result").text("Computer Wins");   
         }
         if (userChoice =="paper" && computerChoice=="paper")
         {
          
             $("#result").text("Tie");    
         }
      if(userChoice == "scissors" && computerChoice=="paper") 
       {
        
           
             $("#result").text("User Wins");
       }
         else if (userChoice =="scissors" && computerChoice=="rock")
         {
         
             $("#result").text("Computer Wins"); 
         }
         if (userChoice =="scissors" && computerChoice=="scissors")
         {
          
             $("#result").text("Tie");    
         }
        

});


 

   


$("button").hover(function(){
  $("button").css("background-color", "blue") 
   $("button").css("color", "white") 
})

    console.log('computerChoice', computerChoice)
    console.log('userChoice', userChoice)
