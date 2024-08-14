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
let roundWinner = document.createElement("h1")

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
            playGame("rock", getComputerChoice());
        case "paper":
            playGame("paper", getComputerChoice());
        case "scissors":
            playGame("scissors", getComputerChoice());
    }
});

function playGame(humanChoice, computerChoice) {   
    let winLose    

    while ((humanScore < 5) && (computerScore < 5)) {
            playRound(humanChoice, computerChoice);
            roundWinner.textContent = ("Computer chose " + computerChoice + "! You " + winLose + "!");
            results.appendChild(roundWinner);
            console.log(winLose);
            console.log(plays)
            break;
        }
    if ((humanScore < 5) && (computerScore < 5)) {
        return;
    }
    else if (computerScore > humanScore) { 
        results.appendChild(finalWinnerComputer)
    }
    else if (computerScore < humanScore) {
        results.appendChild(finalWinnerHuman)
    }
    else {
        alert ("IT'S A TIE")
    }

    function playRound(humanity, computer) { 
           
        if ((computer == "Scissors" && humanity == "rock") 
            || (computer == "Rock" && humanity == "paper")
            || (computer == "Paper" && humanity == "scissors")) {  
                humanScore = humanScore + 1;
                scoreBoardHuman.textContent = ("Your score: " + humanScore);
                winLose = "WIN"
                return(winLose);
        }
        else if ((computer == "Scissors" && humanity == "paper") 
            || (computer == "Rock" && humanity == "scissors") 
            || (computer == "Paper" && humanity == "rock")) {
                computerScore = computerScore + 1;
                scoreBoardComputer.textContent = ("Computer Score: " + computerScore);
                winLose = "LOSE";
                return(winLose);
        }
        else {
            winLose = "tie";
            return(winLose);
        }
        
    }
} 
   
    
