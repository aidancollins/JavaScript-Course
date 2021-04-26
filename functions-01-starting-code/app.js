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

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    console.log('Game is starting...');
    gameIsRunning = true;
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});
