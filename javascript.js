function computerPlay()
{
    // return a string
    let computerChoice = Math.floor((Math.random()* 3) + 1);

    // randomly return rock, paper, or scissors
    switch(computerChoice)
    {
        case 1:
             "rock";
        case 2:
            return "scissors";
        case 3:
            return "paper";
        default:
            return "error";
    }
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
        let userChoice = prompt("Enter rock, paper, or scissors");
        let result = playRound(userChoice, computerPlay());
        console.log(result);
    }
}
