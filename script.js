//Create variable for computer choice 

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

let pcChoice = getComputerChoice()

console.log(pcChoice)