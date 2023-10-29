
function getComputerChoice()
{
    let a = Math.random() * 3;
    a = Math.floor(a);
    if(a == 0)
        return "rock";
    else if(a == 1)
        return "paper";
    else (a == 2)
        return "scissor";
}

let playerScore = 0;

function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        playerScore++;
        console.log("It's a tie!!");
    }
 
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper") {
        playerScore++;
        console.log("Congratulation You Win! Scissor Beats Paper");
    }

    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        playerScore++;
        console.log("Congratulation You Win! Paper Beats Rock");
    }
    
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor") {
        playerScore++;    
        console.log("Congratulation You Win! Rock Beats Scissor");
    }

    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock") {
        console.log("You Lose! Rock Beats Scissor");
    }

    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() ==  "scissor") {
        console.log("You Lose! Scissor Beats Paper");
    }

    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        console.log("You Lose! Paper Beats Rock");
    }

    else {
        console.log("Enter a valid choice");      
    }
  }
   

for(var i = 0; i < 5; i++) {

      let playerSelection = window.prompt("Are you feeling lucky ", "rock");
      
      let computerSelection = getComputerChoice();
      
      console.log("Your Selection ", playerSelection);
      console.log("Computer Selection ", computerSelection);
      
      console.log(playRound(playerSelection, computerSelection));
}

if(playerScore > 2) {
    console.log("You Win !!");
}
else {
    console.log("You Lose!!");
}
