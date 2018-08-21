const Player = require('./Player.js');
const Trail = require('./Trail.js');


module.exports = class Game {
  constructor(ctx, direction) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.players = [
      new Player(10, 10, 20, 20, 'red', 1, 'black'),
      new Player(870, 300, 20, 20, 'green', -1, 'black')
    ];

    this.trails = [];
  };

  // draw one frame of our game
  animate() {
    this.players.forEach( player => {
      // start putting the trail in the array
      player.draw(this.ctx);
      player.move();
      const newTrail = new Trail(player.x, player.y, player.height, player.width, player.color);
      // this.trails.push(newTrail);
      // if (this.trails.indexOf(newTrail) === -1) {
        this.trails.push(newTrail);
      // };
      // console.log(this.trails);
      this.handlePlayer(player);
      this.collidingWithTrail(this.players[0], this.players[1]);
      // this.collidingWithSelf(this.players[0], this.players[1]);
      // player.move();
    });
  };

  collidingWithTrail(player1, player2) {

    this.trails.filter( trail => {
    
      if (trail.color === 'red' && trail.isCollidingWith(player2)) {
        this.endGame();
        // this.addscore()
      }  else if (trail.color === 'green' && trail.isCollidingWith(player1)) {
        this.endGame();
        // this.addscore()
      } 
    });
  };

  // collidingWithSelf(player1, player2) {

  // }

  handlePlayer(player) {
    const { canvas } = this.ctx;
        //if colliding with wall
   if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
        //if colliding with player
      } else if (this.players[0].isCollidingWith(this.players[1])) {
        this.endGame();
        // this.addScore(player[0]);
      } else if (this.players[1].isCollidingWith(this.players[0])) {
        this.endGame();
        // this.addScore(player[1]);
      } 
   };

  endGame() {
    //include player UI 
    this.gameOver = true;
  };

  // addScore() {
  //   var score = 0;
  //   score += 100; 
  //   return score; 
  // }

  isOver() {
    //include player UI
    return this.gameOver;
  };

  togglePause() {
    //include player UI
    this.paused = !this.paused;
  };

  handleKeyPress(e) {
    const direction = {
      dx: 1,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      direction.dx = 1;
      this.players[0].changeDirection(direction);

    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      direction.dx = -1;
      this.players[0].changeDirection(direction);

    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      direction.dy = 1;
      this.players[0].changeDirection(direction);

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
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