const computerScore = 0;
const playerScore = 0;
const choices = ["rock", "scissors", "paper"];
const buttons = document.querySelectorAll("div.buttons button");



function computerPlay()
{
    // return a string
    let computerChoice = Math.floor((Math.random() * choices.length));
    // randomly return rock, paper, or scissors
    return choices[computerChoice];
}



function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    console.log("Computer chose: " + computerSelection);
    if (playerSelection == computerSelection)
    {
        //draw
        return "Draw!";
    }

    switch(playerSelection)
    {
        case "rock":
        {
            if (computerSelection === "scissors")
            {
                return "Player wins!";
            }
            else if (computerSelection === "paper")
            {
                return "Computer wins!";
            }
        }
        case "paper":
        {
            if (computerSelection === "rock")
            {
                return "Player wins!";
            }
            else if (computerSelection === "scissors")
            {
                return "Computer wins!";
            }
        }
        case "scissors":
        {
            if (computerSelection === "paper")
            {
                return "Player wins!";
            }
            else if (computerSelection === "rock")
            {
                return "Computer wins!";
            }
        }
        case "error":
            console.error("Error in computerPlay()");
    }
}


function game()
{
    for (let i = 0; i < 5; ++i)
    {
        let result = playRound(userChoice, computerPlay());
        console.log(result);
    }
}

function playerChoice(e)
{
    let userChoice = e.target.id;
    playRound(userChoice, computerPlay());
}

function checkWinner()
{
    
}
buttons.forEach(button => button.addEventListener("click", playerChoice));