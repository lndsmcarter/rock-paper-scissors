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
let finalWinnerHuman = document.createElement("h1")
let finalWinnerComputer = document.createElement("h1")

scoreBoardHuman.textContent = ("Your score: " + humanScore);
scoreBoardComputer.textContent = ("Computer Score: " + computerScore);
finalWinnerHuman.textContent = "YOU WIN THE GAME";
finalWinnerComputer.textContent = "YOU LOSE THE GAME";
results.appendChild(scoreBoardHuman);
results.appendChild(scoreBoardComputer);




warriors.addEventListener("click", function(event) {
    let target = event.target
    switch(target.id) {
        case "rock":
            playGame("rock", getComputerChoice())
            break;
        case "paper":
            playGame("paper", getComputerChoice())
            break;
        case "scissors":
            playGame("scissors", getComputerChoice())
            break;
    }
});

function playGame(humanChoice, computerChoice) {   
    
    while ((humanScore < 5) && (computerScore < 5)) {
            playRound(humanChoice, computerChoice)
        }
    if (computerScore > humanScore) {
        results.appendChild(finalWinnerComputer)
    }
    else if (computerScore < humanScore) {
        results.appendChild(finalWinnerHuman)
    }
    else {
        alert ("IT WAS A TIE")
    }

    function playRound(y, x) { 
        let plays = 0       
        if ((x == "Scissors" && y == "rock") 
            || (x == "Rock" && y == "paper")
            || (x == "Paper" && y == "scissors")) {  
                humanScore = humanScore + 1;
                scoreBoardHuman.textContent = ("Your score: " + humanScore);
                plays = (plays + 1);
                return(plays);
        }
        else if ((x == "Scissors" && y == "paper") 
            || (x == "Rock" && y == "scissors") 
            || (x == "Paper" && y == "rock")) {
                computerScore = computerScore + 1;
                scoreBoardComputer.textContent = ("Computer Score: " + computerScore);
                plays = (plays + 1);
                return(plays);
        }
        else {
            alert("Tie!");
            plays = (plays + 1);
            return(plays);
        }
    
    }
}    
    
    






