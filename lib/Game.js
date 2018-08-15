const Player = require('./Player.js');

module.exports = class Game {
  constructor(ctx, direction) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.players = [
      new Player(50, 50, 10, 10, 'red', 'black'),
      new Player(100, 100, 10, 10, 'green', 'black')
    ];
  };

  // draw one frame of our game
  animate() {
    this.players.forEach( player => {

     this.handleBlock(player);
      player.draw(this.ctx);
    })
  };

  handlePlayer(player) {
    const { canvas } = this.ctx;

   if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        //if colliding with wall
        //if colliding with player
        //if colliding with self 
        this.endGame();
      } else {
        player.move();
      }
  };

  endGame() {
    //include player UI 
    this.gameOver = true;
  }

  isOver() {
    //include player UI
    return this.gameOver;
  }

  togglePause() {
    //include player UI
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 1,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.players.forEach( player => player.changeDirection(direction) );
  }

}