let playerScore = 0;
let computerScore = 0;
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");
let displayResult_div = document.querySelector('.displayResult');
const scoreBoard_div = document.querySelector('.scoreBoard');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function computerSelection() {
    let weapons = ['rock', 'paper', 'scissors'];
    return weapons[Math.floor(Math.random() * weapons.length)]
}

function win(playerSelection, computerChoice) {
    const playerSelection_doc = document.getElementById(playerSelection);
    playerScore++
    userScore.innerHTML = playerScore;
    compScore.innerHTML = computerScore;
    displayResult_div.innerHTML = "You Win! " + playerSelection.toUpperCase() + " beats " + computerChoice.toUpperCase(); 
    document.getElementById(playerSelection).classList.add('green-glow')
    setTimeout(() => playerSelection_doc.classList.remove('green-glow'), 300);
}
function lose(playerSelection, computerChoice) {
    const playerSelection_doc = document.getElementById(playerSelection);
    computerScore++;
    compScore.innerHTML = computerScore;
    userScore.innerHTML = playerScore;
    displayResult_div.innerHTML = "You Lose! " + computerChoice.toUpperCase() + " beats " + playerSelection.toUpperCase();
    document.getElementById(playerSelection).classList.add('red-glow')
    setTimeout(() => playerSelection_doc.classList.remove('red-glow'), 300);
}
function tie(playerSelection, computerChoice) {
    const playerSelection_doc = document.getElementById(playerSelection);
    userScore.innerHTML = playerScore;
    compScore.innerHTML = computerScore;
    displayResult_div.innerHTML = "It's a Tie!"
    document.getElementById(playerSelection).classList.add('yellow-glow')
    setTimeout(() => playerSelection_doc.classList.remove('yellow-glow'), 300);
}

function game(playerSelection) {
    const computerChoice = computerSelection()
    switch (playerSelection + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerSelection, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerSelection, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(playerSelection, computerChoice);
            break;
    }
}

function main() {
    rock.addEventListener("click", () => game('rock'));
    paper.addEventListener("click", () => game('paper'));
    scissors.addEventListener("click", () => game('scissors'));
}

main()
