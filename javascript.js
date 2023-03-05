let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let x = Math.floor(Math.random() * 3)
    switch (x) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        default: 
            console.error("Check code, there\'s no reason for this message to ever appear.");
            break;
    }
}

function playRound (playerChoice, computerSelection) {
    playerChoice = prompt('Select "ROCK", "PAPER", or "SCISSORS"!');
    playerChoice = playerChoice.toUpperCase();

    computerSelection = getComputerChoice();

    if (playerChoice == computerSelection) {
        console.log('It\'s a tie! Both sides picked ' + playerChoice + '!');
    }
    else if (playerChoice == "ROCK" && computerSelection == "SCISSORS") {
        console.log('You win! ROCK beats SCISSORS!');
        playerScore++;
    }
    else if (playerChoice == "SCISSORS" && computerSelection == "PAPER") {
        console.log('You win! SCISSORS beats PAPER!');
        playerScore++;
    }
    else if (playerChoice == "PAPER" && computerSelection == "ROCK") {
        console.log('You win! PAPER beats ROCK!');
        playerScore++;
    }
    else if (playerChoice == "ROCK" && computerSelection == "PAPER") {
        console.log('You lose! PAPER beats ROCK!');
        computerScore++;
    }
    else if (playerChoice == "SCISSORS" && computerSelection == "ROCK") {
        console.log('You lose! ROCK beats SCISSORS');
        computerScore++;
    }
    else if (playerChoice == "PAPER" && computerSelection == "SCISSORS") {
        console.log('You lose! SCISSORS beats PAPER!');
        computerScore++;
    }
    else console.log("You didn't enter rock/paper/scissors!")
}

function game() {
    for (let x = 1; x <= 5; x++) {
        console.log(`Round ${x} Player: ${playerScore} Computer: ${computerScore}`);
        playRound();
        if (playerScore == 3) {
            console.log('You won!');
            x = 6;
            
        }
        else if (computerScore == 3) {
            console.log('Oof. You lost.');
            x = 6;
        }
        else if (x == 5 && computerScore > playerScore) {
            console.log('Game over, you lost.');
        }
        else if (x == 5 && playerScore > computerScore) {
            console.log('Game over, you win!');
        }
        else continue;
    }
}

game();