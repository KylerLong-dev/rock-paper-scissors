
        const optionsArr = ["rock", "paper", "scissors"];
        let humanScore = 0;
        let computerScore = 0;

        const btnR = document.querySelector(".rock");
        const btnP = document.querySelector(".paper");
        const btnS = document.querySelector(".scissors");
        const results = document.querySelector(".result"); 
        const score = document.querySelector(".score");

        btnR.addEventListener("click", playRound);
        btnP.addEventListener("click", playRound);
        btnS.addEventListener("click", playRound);
/*
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const humanChoice = button.className; 
                const computerChoice = getComputerChoice(optionsArr);
                const result = playRound(humanChoice, computerChoice); 
                results.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}.`;
                score.textContent = `Current Score - You: ${humanScore}, Computer: ${computerScore}`;
            });        
        })
*/
        function getComputerChoice (array) {
            let randomIndex = Math.floor(Math.random() * optionsArr.length);
            return array[randomIndex];
        }

        function playRound (humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                return results.textContent = "It's a tie! Try again.";
            }
            else if (humanChoice === "rock" && computerChoice === "paper"){
                score.textContent = computerScore ++;
                return results.textContent = "Paper beats rock. You lose this round.";
            } 
            else if (humanChoice === "rock" && computerChoice === "scissors"){
                score.textContent = humanScore++;
                return results.textContent = "Rock beats scissors! You win this round.";
            }
            else if (humanChoice === "paper" && computerChoice === "rock"){
                score.textContent = humanScore++;
                return results.textContent = "Paper beats rock! You win this round.";
            }
            else if (humanChoice === "paper" && computerChoice === "scissors"){
                score.textContent = computerScore++;
                return results.textContent = "Scissors beats paper. You lose this round.";
            }
            else if (humanChoice === "scissors" && computerChoice === "rock"){
                score.textContent = computerScore++;
                return results.textContent = "Rock beats scissors. You lose this round.";
            }
            else if (humanChoice === "scissors" && computerChoice === "paper"){
                score.textContent = humanScore++;
                return results.textContent = "Scissors beats paper! You win this round.";
            }
        }
