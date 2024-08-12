// function getHumanChoice() 
//     let input = prompt("Choose your warrior!")
//     let choice = input.toLowerCase();
//     if (choice === "rock" || choice === "paper" || choice === "scissors") {
//         return(choice)
//     }
//     else {
//         return(null)
//     }
// }

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


// Declare variables for button calls 
let humanScore = 0
let computerScore = 0

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let warriors = document.querySelector("#warriors");
let results = document.querySelector("#results");

let scoreBoardHuman = document.createElement("h2")
let scoreBoardComputer = document.createElement("h2")

scoreBoardHuman.textContent = ("Your score: " + humanScore);
scoreBoardComputer.textContent = ("Computer Score: " + computerScore);
results.appendChild(scoreBoardHuman);
results.appendChild(scoreBoardComputer);



warriors.addEventListener("click", function(event) {
    let target = event.target
    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice())
            break;
        case "paper":
            playRound("paper", getComputerChoice())
            break;
        case "scissors":
            playRound("scissors", getComputerChoice())
            break;
    }
});


function playRound(humanChoice, computerChoice) {
    let plays = 1
    
    if ((computerChoice == "Scissors" && humanChoice == "rock") 
        || (computerChoice == "Rock" && humanChoice == "paper")
        || (computerChoice == "Paper" && humanChoice == "scissors")) {  
            humanScore = humanScore + 1;
            plays = (plays + 1);
            alert("You win!");
            return(plays);
    }
    else if ((computerChoice == "Scissors" && humanChoice == "paper") 
        || (computerChoice == "Rock" && humanChoice == "scissors") 
        || (computerChoice == "Paper" && humanChoice == "rock")) {
            computerScore = computerScore + 1;
            plays = (plays + 1);
            alert("You lose!");
            return(plays);
    }
    else {
        alert("Tie!")
        plays = (plays + 1);
        return(plays);
    }

}
    
    






// function playGame() {    
    
//     let plays = 1

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