let computerChoice = "";

function getComputerChoice () {
    let x = Math.floor(Math.random() * 3)
    switch (x) {
        case 0:
            computerChoice = "ROCK"
            break;
        case 1:
            computerChoice = "PAPER"
            break;
        case 2:
            computerChoice = "SCISSORS"
            break;
        default: 
            console.error("Check code, there\'s no reason for this message should never appear.");
            break;
    }
}

function playRound (playerChoice, computerSelection) {
    
    while(playerChoice != "ROCK" || playerChoice != "PAPER" || playerChoice != "SCISSORS")
        playerChoice = prompt('Select "ROCK", "PAPER", or "SCISSORS"!');
        playerChoice = playerChoice.toUpperCase();
    getComputerChoice();
    computerSelection = computerChoice;
    if (playerChoice == computerSelection) console.log('It\'s a tie! Both sides picked ' + playerChoice + '!')
    else if (playerChoice == "ROCK" && computerSelection == "SCISSORS") console.log('You win! ROCK beats SCISSORS!')
    else if (playerChoice == "SCISSORS" && computerSelection == "PAPER") console.log('You win! SCISSORS beats PAPER!')
    else if (playerChoice == "PAPER" && computerSelection == "ROCK") console.log('You win! PAPER beats ROCK!')
    else if (playerChoice == "ROCK" && computerSelection == "PAPER") console.log('You lose! PAPER beats ROCK!')
    else if (playerChoice == "SCISSORS" && computerSelection == "ROCK") console.log('you lose! ROCK beats SCISSORS')
    else if (playerChoice == "PAPER" && computerSelection == "SCISSORS")console.log('You lose! SCISSORS beats PAPER!')
    else console.log("You didn't enter rock/paper/scissors!")
}
function game() {
    for (let x = 0; x < 5; x++) {
        
    }
}