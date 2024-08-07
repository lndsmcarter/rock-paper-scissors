//Create function called getComputerChoice 
function getComputerChoice() {
    //Function chooses a number between 0 and 1 
    const random = Math.random()
    //If random number is between 0 and .33, return "Rock"
    if (random < 0.33) {
        return("Rock")
    }
    //Else If random number is between .33 and .66, return "paper"
    if (random > 0.33 && random < 0.66 ) {
        return("Paper")
    }
    //Else, return "scissors"
    else {
        return("Scissors")
    }
}

//Create variable for computer choice, determined by the getComputerChoice function
let pc = getComputerChoice()

// Create function getHumanChoice
function getHumanChoice() {
    //Prompt the user to input a choice
    let choice = prompt("Choose your warrior!")
    choice = choice.toLowerCase
    //If input equals "Rock" || "Paper" || "Scissors" return input 
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return(choice)
    }
    //Else, print "Not an option" in the console and restate the prompt -- loop 
    else {
        return("Not an option")
    }
}


let humanScore = 0
let computerScore = 0

//Create playGame function 
// Create playRound function to encompass both human and pc choice parameters
function playGame() {    
    
    let plays = 1

    while (plays <= 5) {
            let humanSelection = getHumanChoice();
            let pcSelection = getComputerChoice();
            playRound(humanSelection, pcSelection)
        }
    if (computerScore > humanScore) {
        alert ("YOU LOSE THE GAME")
    }
    else if (computerScore < humanScore) {
        alert ("YOU WIN THE GAME")
    }

    function playRound(humanChoice, computerChoice) {
        // Take computer choice and Human choice variables and compare them 
        if (humanChoice == "Not an option") {
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


// console.log(humanScore)
// console.log(computerScore)

console.log(playGame())

