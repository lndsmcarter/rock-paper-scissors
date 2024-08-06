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
        return("Thank you!")
    }
    //Else, print "Not an option" in the console and restate the prompt -- loop 
    else if (choice != "Rock" || "Paper" || "Scissors") {
        return("Not an option")
    }
}
//Use getHumanChoice in variable human
console.log(getHumanChoice())