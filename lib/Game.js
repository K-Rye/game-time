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

  animate() {
    this.players.forEach( player => {
      player.draw(this.ctx);
      player.move();
      const newTrail = new Trail(player.x, player.y, player.height, player.width, player.color);
      this.trails.push(newTrail);
      player.path.unshift(newTrail);
      this.handlePlayer(player);
      this.collidingWithTrail(this.players[0], this.players[1]);
    });
  };

  collidingWithTrail(player1, player2) {

    this.trails.filter( trail => {
    
      if (trail.color === 'red' && trail.isCollidingWith(player2)) {
        this.endGame();
        // this.addScore(this.players[0], this.players[1]);
      }  else if (trail.color === 'green' && trail.isCollidingWith(player1)) {
        this.endGame();
        // this.addScore(this.players[0], this.players[1]);
      }  
    });
  };

  handlePlayer(player) {
    const { canvas } = this.ctx;
   if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
        // this.addScore(this.players[0], this.players[1]);
      } else if (this.players[0].isCollidingWith(this.players[1])) {
        this.endGame();
        // this.addScore(this.players[0], this.players[1]);
      } else if (this.players[1].isCollidingWith(this.players[0])) {
        this.endGame();
        // this.addScore(this.players[0], this.players[1]);
      } else if (player.isCollidingWithPath(player.path)) {
        this.endGame();
      }
   };

  endGame() {
    this.gameOver = true;
  };

  addScore(player1, player2) {
    if (player1.isCollidingWith(player2)) { 
      player1.score + 100;
      return player1.score; 
    } else if (player2.isCollidingWith(player1)) {
      player2.score + 100;
      return player2.score; 
    } else if (player1.isCollidingWithWall(900, 325)) {
      player1.score - 100;
      return player1.score; 
    } else if (player2.isCollidingWithWall(900, 325)) {
      player2.score - 100;
      return player2.score; 
    }
  }

  isOver() {
    return this.gameOver;
  };

  togglePause() {
    this.paused = !this.paused;
  };

  handleKeyPress(e) {
    const direction = {
      dx: 0,
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