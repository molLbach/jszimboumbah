function getComputerChoice() {
    const strings = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return strings[randomIndex];
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return -1;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        return 0;
    } else {
        return 1;
    }
}

function game() {
    let userPoints = 0;
    let computerPoints = 0;

    do {
        userChoice = prompt("Do you want to choose Rock, Paper, or Scissors?");
        const computerChoice = getComputerChoice(); 
        const roundResult = playRound(userChoice, computerChoice);

        if (roundResult === 1) {
            userPoints++;
            console.log("You won the round")
        } else if (roundResult === 0) {
            computerPoints++;
            console.log("You lost the round")
        } else {
            console.log("It's a draw")
        }

    } while (userPoints !== 3 && computerPoints !== 3);

    if (userPoints === 3) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}



game();
