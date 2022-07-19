const choices = ["Rock", "Scissors", "Paper"];
const buttons = document.querySelectorAll("div.buttons button");
const playerPoints = document.querySelector("#player-score");
const computerPoints = document.querySelector("#computer-score");
const results = document.querySelector("div.result");
const reset = document.querySelector("#reset");



let computerScore = 0;
let playerScore = 0;
playerPoints.textContent = playerScore;
computerPoints.textContent = computerScore;

reset.addEventListener("click", () => {location.reload();})

buttons.forEach(button => button.addEventListener("click", playerChoice));

function computerPlay()
{
    // return a string
    let computerChoice = Math.floor((Math.random() * choices.length));
    // randomly return rock, paper, or scissors
    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection)
{
    console.log("Computer chose: " + computerSelection);

    if (playerSelection == computerSelection)
    {
        //draw
        playerPoints.textContent = ++playerScore;
        computerPoints.textContent = ++computerScore;
        results.textContent = `${playerSelection} ties with ${computerSelection} both gain points!`;
    }
    else
    {
        
        switch(playerSelection)
        {
            case "Rock":
            {
                if (computerSelection === "Scissors")
                {
                    //player win
                    playerPoints.textContent = ++playerScore;
                    results.textContent = `${playerSelection} beats ${computerSelection}, player wins!`;
                }
                else if (computerSelection === "Paper")
                {
                    //computer win
                    computerPoints.textContent = ++computerScore;
                    results.textContent = `${computerSelection} beats ${playerSelection}, computer wins!`;
                }
                break;
            }
            case "Paper":
            {
                if (computerSelection === "Rock")
                {
                    playerPoints.textContent = ++playerScore;
                    results.textContent = `${playerSelection} beats ${computerSelection}, player wins!`
                }
                else if (computerSelection === "Scissors")
                {
                    computerPoints.textContent = ++computerScore;
                    results.textContent = `${computerSelection} beats ${playerSelection}, computer wins!`;
                }
                break;
            }
            case "Scissors":
            {
                if (computerSelection === "Paper")
                {
                    playerPoints.textContent = ++playerScore;
                    results.textContent = `${playerSelection} beats ${computerSelection}, player wins!`
                }
                else if (computerSelection === "Rock")
                {
                    computerPoints.textContent = ++computerScore;
                    results.textContent = `${computerSelection} beats ${playerSelection}, computer wins!`;
                }
                break;
            }
            default:
                console.error("Error in computerPlay()");
        }
    }
}


// function game()
// {
//     for (let i = 0; i < 5; ++i)
//     {
//         let result = playRound(userChoice, computerPlay());
//         console.log(result);
//     }
// }

function playerChoice(e)
{
    let userChoice = e.target.id;
    //console.log("target:" + e.target.id);
    playRound(userChoice, computerPlay());
    checkWinner();

}

function checkWinner()
{
    if (playerScore === 5 || computerScore === 5)
    {
        if (playerScore === computerScore)
        {
            results.textContent = "Draw!";
        }
        else if (playerScore > computerScore)
        {
            results.textContent = "Player wins!";
        }
        else
        {
            results.textContent = "Computer wins!";
        }
        
        buttons.forEach(button => button.removeEventListener("click", playerChoice))
       
    
    }
}

// List out the scoring etc


