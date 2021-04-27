const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
      alert(`Invalid choice, ${DEFAULT_USER_CHOICE} was chosen for you!`);
      return DEFAULT_USER_CHOICE;
  }
  return selection;
};

function getWinner(playerChoice, computerChoice) {
    let winner;
    if (computerChoice === 1) {
        computerChoice = ROCK;
    } else if (computerChoice === 2) {
        computerChoice = PAPER;
    } else {
        computerChoice = SCISSORS;
    }
    if (playerChoice === computerChoice) {
        winner = 'draw';
    } else if (playerChoice === ROCK && computerChoice === PAPER) {
        winner = 'computer';
    } else if (playerChoice === ROCK && computerChoice === SCISSORS) {
        winner = 'player';
    } else if (playerChoice === PAPER && computerChoice === ROCK) {
        winner = 'player';
    } else if (playerChoice === PAPER && computerChoice === SCISSORS) {
        winner = 'computer';
    } else if (playerChoice === SCISSORS && computerChoice === ROCK) {
        winner = 'computer';
    } else if (playerChoice === SCISSORS && computerChoice === PAPER) {
        winner = 'player';
    }   
    console.log(computerChoice);
    return winner;
}

function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    console.log('Game is starting...');
    gameIsRunning = true;
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    const computerChoice = getComputerChoice(1, 3);
    console.log(computerChoice);
    const winner = getWinner(playerSelection, computerChoice);
    console.log(`${winner} wins!`);
});
