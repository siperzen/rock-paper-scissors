function getComputerChoice() {
    /* console.log( one of three given values*/
   const rock = 0;
   const paper = 1;
   const scissors = 2;
   let randomNumber = Math.floor(Math.random() * 3);
   /*If the random number equals a choice, console.log( the choice*/
   if (randomNumber === rock) {
    return "rock";
   } else if (randomNumber === paper) {
    return "paper";
} else if (randomNumber === scissors) {
    return "scissors";
} 
}

function getHumanChoice () {
    let choice = prompt("Rock, Paper or Scissors?");
    if (choice == "rock" ) {
        return "rock";
    }
    else if (choice == "paper") {
        return "paper";
    }
    else if (choice == "scissors") {
        return "scissors";
    }
    else {
        return "Invalid choice";
    }
}

console.log(getHumanChoice())


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    humanChoice = getHumanChoice().toLowerCase()

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    function playRound(humanChoice, computerChoice) {
        // Print the round winner
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lost. Paper beats Rock!");
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You won. Rock beats Scissors!");
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("It's a tie, try again!")
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You won. Paper beats Rock!");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("It's a tie, try again!");
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lost. Scissors beats Paper!");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lost. Rock beats Scissors!");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You won. Scissors beats Paper!");
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("It's a tie, try again!");
        }
}

    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!")
    } else {
        console.log("Its a tie!");
    }
    }
