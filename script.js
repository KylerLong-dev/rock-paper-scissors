//Determine what each section of code does before starting to refactor 
//Store button elements in a variable
//Store results div in a variable to then add result textContent to
//Add eventListeners to each button that call the playRound function
//refactor getHumanChoice function to include userSelection variable that stores button choice from the user
//

const optionsArr = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

function getHumanChoice () {
    
}

function getComputerChoice (array) {
    let randomIndex = Math.floor(Math.random() * optionsArr.length);
    return array[randomIndex];
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "The game is a tie! No change in score.";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "Paper beats rock. You lose this round.";
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "Rock beats scissors! You win this round.";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "Paper beats rock! You win this round.";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "Scissors beats paper. You lose this round.";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return "Rock beats scissors. You lose this round.";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "Scissors beats paper! You win this round.";
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        let roundNum = i + 1; 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(optionsArr);
        console.log("Round number: " + roundNum);
        console.log("You: " + humanSelection);
        console.log("Darth Vader: " + computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        console.log("Current Score - You: " + humanScore + ", Darth Vader: " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    }
    else if (computerScore > humanScore) {
        console.log("Sorry, you lost. Try again!");
    }
}

playGame();