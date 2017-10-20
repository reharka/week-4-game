  // Random number between 19-120 when the game starts is chosen.
  // Random numbers assigned for each puppy between 1-12.
  // User selects a puppy to add to total score.
  // If total score matches random score, user wins.
  // If score goes over, use loses. 
  // Wins and losses recorded.
  // Random number changes with each win and loss
  // Puppy numbers change with each win and loss.


$(document).ready(function(){
  var Random=Math.floor(Math.random()*101+19)


$("#randomNumber").text(Random);
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;


$("#numberWins").text(wins);
$("#numberLosses").text(losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $("#randomNumber").text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $("#finalTotal").text(userTotal);
      } 

function success(){
  alert("You won ALL THE PUPPIES!!");
  wins++; 
  $("#numberWins").text(wins);
  reset();
}

function loser(){
  alert ("Uh oh... bye-bye, puppies...");
  losses++;
  $("#numberLosses").text(losses);
  reset()
}

  $("#one").on ("click", function(){
  userTotal = userTotal + num1;
  console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 

        if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })

  $("#two").on ("click", function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 

        if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  

  $("#three").on ("click", function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

          if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          loser();
        } 
  }) 

  $("#four").on ("click", function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
      
          if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 