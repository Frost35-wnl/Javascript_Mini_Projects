let rockSelection = document.querySelector(".rock");
let paperSelection = document.querySelector(".paper");
let scissorsSelection = document.querySelector(".scissors");
let computerChoiceDisplay = document.querySelector(".computerChoiceDisplay");
let answer = document.querySelector(".answer");
let humanScoreDisplay = document.querySelector(".humanScore");
let computerScoreDisplay = document.querySelector(".computerScore");
let restartButton = document.querySelector(".restart");

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    let answer = null;

    do {
     answer = prompt('Make your choice (rock, paper, scissors) : ');  
     answer = answer.toLowerCase();          
    } while ( answer !== 'rock' && answer !== 'paper' && answer !== 'scissors');

    return answer;
}

function playGame(){
    let humanScore = 0, computerScore = 0, playCount = 0;

    function playRound (humanChoice, computerChoice){

        if(endGame(humanScore, computerScore) == 1) return 1;

        computerChoiceDisplay.textContent = "Computer choice : " + computerChoice;
    
        if (humanChoice == computerChoice) {
            answer.textContent = "No one lose !";
        }
        else if ( humanChoice == 'rock') {
            if (computerChoice == 'paper') {
                answer.textContent = "You lose ! Paper beats Rock";
                computerScore++;
            } else {
                answer.textContent = "You win ! Rock beats Scissors ";
                humanScore++;
            }
        }
        else if ( humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                answer.textContent = "You win ! Paper beats Rock";
                humanScore++;
            } else {
                answer.textContent = "You lose ! Scissors beats Paper";
                computerScore++;
            }
        }
        else if (humanChoice == 'scissors'){
            if (computerChoice == 'paper') {
                answer.textContent = "You win ! Scissors beats Paper";
                humanScore++;
            } else {
                answer.textContent = "You lose ! Rock beats Scissors";
                computerScore++;
            }
        }

        computerScoreDisplay.textContent = computerScore;
        humanScoreDisplay.textContent = humanScore;

        if(endGame(humanScore, computerScore) == 1) return 1;

        return 1;
    }

    rockSelection.addEventListener('click', () => {
        let humanChoice = 'rock';
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    paperSelection.addEventListener('click', () => {
        let humanChoice = 'paper';
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    scissorsSelection.addEventListener('click', () => {
        let humanChoice = 'scissors';
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    restartButton.addEventListener('click', () => {
        location.reload();
    })



}

function endGame(humanScore, computerScore)
{
    if (humanScore == 5) {
        answer.textContent = "Congrats !!! :)";
        restartButton.style.display = "block";
        return 1;
    }
    if (computerScore == 5) {
        answer.textContent = "Game over :(";
        restartButton.style.display = "block";
        return 1;
    }

    return 0;
}

playGame();


