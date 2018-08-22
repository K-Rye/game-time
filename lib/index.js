const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const gameStartButton = document.querySelector('.game-start');
const gameOverText = document.querySelector('.gameover');
const playerTryAgainText = document.querySelectorAll('.try-again');
// const playerScore1 = document.querySelector('.score1');
// const playerScore2 = document.querySelector('.score2');
// const player1Lives = document.querySelector('.player1-lives');
// const player2Lives = document.querySelector('.player2-lives');

// function scoreBoard() {
//     playerScore1.innerText = game.players[0].score;
//     playerScore2.innerText = game.players[1].score;
// }

gameStartButton.addEventListener('click', gameLoop);
function gameLoop () {
  // scoreBoard();
  // game.addScore(game.players[0], game.players[1]);

  if (game.isOver()) {
    gameOverText.innerText = 'GAME OVER';
    gameOverTextDisplay();
    tryAgainText();
  } else {
    game.animate();
  }

  window.requestAnimationFrame(gameLoop)
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function gameOverTextDisplay() {
    if (gameOverText.style.visibility === "hidden") {
        gameOverText.style.visibility = "visible";
    } else {
        gameOverText.style.visibility = "hidden";
    }
}

function tryAgainText() {
  if (playerTryAgainText[0].style.visibility === "hidden") {
        playerTryAgainText[0].style.visibility = "visible";
        playerTryAgainText[1].style.visibility = "visible";
    } else {
        playerTryAgainText[0].style.visibility = "hidden";
        playerTryAgainText[1].style.visibility = "hidden";
    }
}

