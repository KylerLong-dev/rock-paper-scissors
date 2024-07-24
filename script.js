//include display of what the user and computer chose after each round
//include this edit roundResult.text content in playGame function

const optionsArr = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");
const resetContainer = document.querySelector("#reset-container");

function getHumanChoice () {
        buttonRock.addEventListener("click", () => playGame("rock"));
        buttonPaper.addEventListener("click", () => playGame("paper"));
        buttonScissors.addEventListener("click", () => playGame("scissors"));
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

function playGame (humanChoice) {
    const computerSelection = getComputerChoice(optionsArr);
    let result = playRound(humanChoice, computerSelection);
    roundResult.textContent = result; 
    scoreDisplay.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 3) {
        scoreDisplay.textContent = "Congratulations! You won the game!";
        createResetButton();
    }
    else if (computerScore === 3) {
        scoreDisplay.textContent = "The computer got you this time, try again!"
        createResetButton();
    }
}

function createResetButton () {
    const resetButton = document.createElement("button");
    resetButton.textContent = "Restart Game";
    resetButton.addEventListener("click", restartGame);
    resetContainer.appendChild(resetButton);
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    scoreDisplay.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
    resetContainer.innerHTML = "";
}

getHumanChoice();