const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const gameStartButton = document.querySelector('.game-start');
const gameOverText = document.querySelector('.gameover');
const playerTryAgainText = document.querySelectorAll('.try-again');
const playerScore = document.querySelector('score');

gameStartButton.addEventListener('click', gameLoop);

// Start animation loop
// window.requestAnimationFrame(gameLoop);

function gameLoop () {

  if (game.isOver()) {
    gameOverText.innerText = 'GAME OVER';
    playerTryAgainText[0].innerText = 'TRY AGAIN';
    playerTryAgainText[1].innerText = 'TRY AGAIN';

    // let newScore = addScore();

    // playerScore.innerText = newScore; 
    // var score = addScore();
    
    //If player looses all lives- "Game over, new player"
    //If player just lost a life but still has lives remaining- "Player(whatever) is dead. Try again?"
    //Make game startable again- updating start button to refresh canvas context but not lives and score 
    //disable start button after game start and re-enable after gameOver() 

    //USE START BUTTON TO WIPE CANVAS AND START NEW GAME 
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

  } else {
    // clear previous frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

