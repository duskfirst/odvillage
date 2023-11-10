
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
let computerScore = 0;
function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        // playerScore++;
        span.innerText = "It's a tie!!"; 
        console.log("It's a tie!!");
    }
 
    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper") {
        playerScore++;
        span.innerText = "Congratulation You Win! Scissor Beats Paper";
        console.log("Congratulation You Win! Scissor Beats Paper");
    }

    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        playerScore++;
        span.innerText = "Congratulation You Win! Paper Beats Rock";
        console.log("Congratulation You Win! Paper Beats Rock");
    }
    
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor") {
        playerScore++;
        span.innerText = "Congratulation You Win! Rock Beats Scissor";    
        console.log("Congratulation You Win! Rock Beats Scissor");
    }

    else if(playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock") {
        computerScore++;
        span.innerText = "You Lose! Rock Beats Scissor";
        console.log("You Lose! Rock Beats Scissor");
    }

    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() ==  "scissor") {
        computerScore++;
        span.innerText = "You Lose! Scissor Beats Paper";
        console.log("You Lose! Scissor Beats Paper");
    }

    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        computerScore++;
        span.innerText = "You Lose! Paper Beats Rock";
        console.log("You Lose! Paper Beats Rock");
    }

    else {
        span.innerText = "Enter a valid choice";  
        console.log("Enter a valid choice");      
    }
  }
   
  
  
  function check(){
      if(playerScore  == 5 || computerScore == 5)
      {
          span.innerText = playRound > computerScore ? 'YOU WIN THE GAME!' : 'YOU LOSE THE GAME!';
          playerScore = 0;
          computerScore = 0;
        }
    }


const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const sciBtn = document.createElement("button");


rockBtn.innerHTML = 'ROCK';
paperBtn.innerHTML = 'PAPER';
sciBtn.innerHTML = 'SCISSOR';

const body = document.body;
const div = document.createElement('div');
const span = document.createElement('span');
const score = document.createElement('span');

span.style.display = 'block';
score.style.display = 'block';

div.appendChild(rockBtn);
div.appendChild(paperBtn);
div.appendChild(sciBtn);
div.appendChild(score);
div.appendChild(span);

body.appendChild(div);

const button = document.createElement('button');

button.style.display = 'inline';

div.style.padding = '10px';

rockBtn.addEventListener('click', ()=>{
    playRound('Rock', getComputerChoice());
    score.innerText = playerScore.toString();
    check(); 
});

paperBtn.addEventListener('click', ()=>{
    playRound('Paper', getComputerChoice());
    
    score.innerText = playerScore.toString(); 
    check();
});

rockBtn.addEventListener('click', ()=>{
    playRound('Scissor', getComputerChoice());
    score.innerText = playerScore.toString(); 
    check();
});


