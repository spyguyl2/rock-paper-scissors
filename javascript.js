let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#btnRock');
rock.addEventListener('click', () => {
    playRound("ROCK");
    isGameOver();
});
const paper = document.querySelector('#btnPaper');
paper.addEventListener('click', () => {
    playRound("PAPER");
    isGameOver();
});
const scissors = document.querySelector('#btnScissors');
scissors.addEventListener('click', () => {
    playRound("SCISSORS");
    isGameOver();
});
const divPlayerScore = document.querySelector('#playerScore');
const divComputerScore = document.querySelector('#computerScore');

function isGameOver() {
    if (playerScore === 5) {
        result.textContent = "You won the game!";
        playAgain();
    }
    if (computerScore === 5) {
        result.textContent = "You lost the game!";
        playAgain();
    }
}

function playAgain() {
    //let answer = prompt("Want to play again?").toLowerCase;
    if (answer == "yes") {
        playerScore = 0;
        computerScore = 0;
        divPlayerScore.textContent = "Player Score: " + playerScore;
        divComputerScore.textContent = "Computer Score: " + computerScore;
    }
}

function addPoint(playerOrComputer) {
    if (playerOrComputer === "player") {
        playerScore++
        divPlayerScore.textContent = "Player Score: " + playerScore;
    }
    else {
        computerScore++
        divComputerScore.textContent = "Computer Score: " + computerScore;
    }
}

const result = document.querySelector('#result');
function displayResult(text) {
    result.textContent = text;
}

function getComputerChoice () {
    let x = Math.floor(Math.random() * 3);
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
    //playerChoice = prompt('Select "ROCK", "PAPER", or "SCISSORS"!');
    //playerChoice = playerChoice.toUpperCase();

    computerSelection = getComputerChoice();

    if (playerChoice == computerSelection) {
        displayResult('It\'s a tie! Both sides picked ' + playerChoice + '!');
    }
    else if (playerChoice == "ROCK" && computerSelection == "SCISSORS") {
        displayResult('You win! ROCK beats SCISSORS!');
        addPoint("player");
    }
    else if (playerChoice == "SCISSORS" && computerSelection == "PAPER") {
        displayResult('You win! SCISSORS beats PAPER!');
        addPoint("player");
    }
    else if (playerChoice == "PAPER" && computerSelection == "ROCK") {
        displayResult('You win! PAPER beats ROCK!');
        addPoint("player");
    }
    else if (playerChoice == "ROCK" && computerSelection == "PAPER") {
        displayResult('You lose! PAPER beats ROCK!');
        addPoint();
    }
    else if (playerChoice == "SCISSORS" && computerSelection == "ROCK") {
        displayResult('You lose! ROCK beats SCISSORS');
        addPoint();
    }
    else if (playerChoice == "PAPER" && computerSelection == "SCISSORS") {
        displayResult('You lose! SCISSORS beats PAPER!');
        addPoint();
    }
    else console.log("You didn't enter rock/paper/scissors!");

    isGameOver();
}

/* do i even need this function anymore???
function game() {
    for (let x = 1; x <= 5; x++) {
        console.log(`Round ${x} Player: ${playerScore} Computer: ${computerScore}`);
        playRound();
        if (playerScore == 5) {
            console.log('You won!');
            x = 6;
        }
        else if (computerScore == 5) {
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
*/

/*
let keepGoing = true;
while (keepGoing) {
    game();
    let answer = prompt('Wanna play again? Enter "Y" for yes.');
    answer = answer.toUpperCase();
    computerScore = 0;
    playerScore = 0;
    if (answer == 'Y') continue;
    else keepGoing = false;
    
}
*/
//console.log('Thanks for playing!')