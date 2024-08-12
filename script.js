function getComputerChoice() {
    const random = Math.random()
    if (random < 0.33) {
        return("Rock")
    }
    if (random > 0.33 && random < 0.66 ) {
        return("Paper")
    }
    else {
        return("Scissors")
    }
}

function getHumanChoice() {
    let input = prompt("Choose your warrior!")
    let choice = input.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return(choice)
    }
    else {
        return(null)
    }
}

let humanScore = 0
let computerScore = 0

function playGame() {    
    
    let plays = 1

    // while (plays <= 5) {
    //         let humanSelection = getHumanChoice();
    //         let pcSelection = getComputerChoice();
    //         playRound(humanSelection, pcSelection)
    //     }
    // if (computerScore > humanScore) {
    //     alert ("YOU LOSE THE GAME")
    // }
    // else if (computerScore < humanScore) {
    //     alert ("YOU WIN THE GAME")
    // }
    // else {
    //     alert ("IT WAS A TIE")
    // }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == null) {
            alert("Invalid entry")
        }
        else if ((computerChoice == "Scissors" && humanChoice == "rock") 
            || (computerChoice == "Rock" && humanChoice == "paper")
            || (computerChoice == "Paper" && humanChoice == "scissors")) {  
                humanScore = humanScore + 1;
                plays = (plays + 1);
                alert("You win!");
                console.log("Your score: " + humanScore);
                console.log("Computer Score: " + computerScore);
                return(plays);
        }
        else if ((computerChoice == "Scissors" && humanChoice == "paper") 
            || (computerChoice == "Rock" && humanChoice == "scissors") 
            || (computerChoice == "Paper" && humanChoice == "rock")) {
                computerScore = computerScore + 1;
                plays = (plays + 1);
                alert("You lose!");
                console.log("Your score: " + humanScore);
                console.log("Computer Score: " + computerScore);
                return(plays);
        }
        else {
            alert("Tie!")
            plays = (plays + 1);
            console.log("Your score: " + humanScore);
            console.log("Computer Score: " + computerScore);
            return(plays);
        }
    }
    
    

}

console.log(playGame())

