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
    //If input equals "Rock" || "Paper" || "Scissors" return value 
    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        return(choice)
    }
    //Else, print "Not an option" in the console and restate the prompt -- loop 
    else {
        return("Not an option")
    }

    // while (choice !== "Rock" || choice !== "Paper" || choice !== "Scissors") {
    //     return("Try again")
    //     let choice = prompt("Choose your warrior!")
    // }
}
//Use getHumanChoice in variable human

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

    function playRound(humanChoice, computerChoice) {
        // Take computer choice and Human choice variables and compare them 
        if (humanChoice == "Not an option") {
            return ("Invalid entry")
        }
        else if ((computerChoice == "Scissors" && humanChoice == "Rock") 
            || (computerChoice == "Rock" && humanChoice == "Paper")
            || (computerChoice == "Paper" && humanChoice == "Scissors")) {  
                humanScore = humanScore + 1
                plays = (plays + 1)
                console.log(humanScore)
                console.log(computerScore)
                return(plays)
        }
        else if ((computerChoice == "Scissors" && humanChoice == "Paper") 
            || (computerChoice == "Rock" && humanChoice == "Scissors") 
            || (computerChoice == "Paper" && humanChoice == "Rock")) {
                computerScore = computerScore + 1
                plays = (plays + 1)
                console.log(humanScore)
                console.log(computerScore)
                return(plays)
        }
        else {
            return ("Tie!")
        }
    }
    
    

}


// console.log(humanScore)
// console.log(computerScore)

console.log(playGame())

