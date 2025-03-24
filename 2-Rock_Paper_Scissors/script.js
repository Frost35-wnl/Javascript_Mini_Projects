alert("Check the console log");

console.log("Rock Paper Scissors");

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

        console.log('Your choice : ' + humanChoice + '\n' + 'Computer choice : ' + computerChoice + '\n');
    
        if (humanChoice == computerChoice) {
            console.log("No one lose !");  
        }
        else if ( humanChoice == 'rock') {
            if (computerChoice == 'paper') {
                console.log("You lose ! Paper beats Rock");
                computerScore++;
            } else {
                console.log("You win ! Rock beats Scissors ");
                humanScore++;
            }
        }
        else if ( humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                console.log("You win ! Paper beats Rock");
                humanScore++;
            } else {
                console.log("You lose ! Scissors beats Paper");
                computerScore++;
            }
        }
        else if (humanChoice == 'scissors'){
            if (computerChoice == 'paper') {
                console.log("You win ! Scissors beats Paper");
                humanScore++;
            } else {
                console.log("You lose ! Rock beats Scissors");
                computerScore++;
            }
        }
        return 1;
    }

    while(playCount <= 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playCount += playRound(humanSelection, computerSelection);
    }

    console.log('\n\nYour score : ' + humanScore + '\n' + 'Computer score : ' + computerScore + '\n');
}

playGame();


