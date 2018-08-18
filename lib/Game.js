const Player = require('./Player.js');
const Trail = require('./Trail.js');


module.exports = class Game {
  constructor(ctx, direction) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.players = [
      new Player(10, 150, 10, 10, 'red', 1, 'black'),
      new Player(280, 150, 10, 10, 'green', -1, 'black')
    ];

    this.trails = [];
  };

  // draw one frame of our game
  animate() {
    this.players.forEach( player => {
      // start putting the trail in the array

      const newTrail = new Trail(player.x, player.y, player.height, player.width, player.color);
      this.trails.push(newTrail);

      this.handlePlayer(player);
      player.draw(this.ctx);
      // this.newTrail.draw(this.ctx); 
      // this.trails.forEach( trail =>  {
        // newTrail.draw(this.ctx);
      // });
    });
  };

  handlePlayer(player) {
    const { canvas } = this.ctx;

        //if colliding with wall
   if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
        //if colliding with player
      } else if (this.players[0].isCollidingWith(this.players[1])) {
        console.log('colliding with player');
        this.endGame();
      } else if (this.players[1].isCollidingWith(this.players[0])) {
        console.log('colliding with player');
        this.endGame();
      } else {
        player.move();
      }
        //if colliding with self 
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
      this.players[0].changeDirection(direction);

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;
      this.players[0].changeDirection(direction);

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;
      this.players[0].changeDirection(direction);

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
      this.players[0].changeDirection(direction);
    } 
    else if (e.key === 'D' || e.key === 'd') {
      direction.dx = 1;
      this.players[1].changeDirection(direction);

    } else if (e.key === 'A' || e.key === 'a') {
      direction.dx = -1;
      this.players[1].changeDirection(direction);

    } else if (e.key === 'S' || e.key === 's') {
      direction.dy = 1;
      this.players[1].changeDirection(direction);

    } else if (e.key === 'W' || e.key === 'w') {
      direction.dy = -1;
      this.players[1].changeDirection(direction);
    } 
  }
}