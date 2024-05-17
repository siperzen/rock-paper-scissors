let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset"); // New reset button
const resultDisplay = document.querySelector("#result");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

resetButton.addEventListener("click", () => {
    resetGame();
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    let roundResult = "";
    
    if (humanChoice === computerChoice) {
        roundResult = "It's a tie, try again!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        roundResult = `You won. ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
        humanScore++;
    } else {
        roundResult = `You lost. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;
        computerScore++;
    }

    resultDisplay.textContent = roundResult;
    humanScoreDisplay.textContent = `Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Score: ${computerScore}`;

    if (humanScore === 5) {
        resultDisplay.textContent = "You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDisplay.textContent = "Computer won the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = "Score: 0";
    computerScoreDisplay.textContent = "Score: 0";
    resultDisplay.textContent = ""; // Clear result display
}
