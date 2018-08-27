const Player = require('./Player.js');
const Trail = require('./Trail.js');

module.exports = class Game {
  constructor(ctx, canvas, button, scoreText1,  scoreText2) {
    this.ctx = ctx;
    this.canvas = canvas; 
    this.button = button;
    this.scoreText1 = scoreText1;
    this.scoreText2 = scoreText2;
    this.paused = true;
    this.gameOver = false;

    this.players = this.createPlayers();

    this.trails = [];
  };
//checking state of game 
  gameTime() {
   if (!this.paused && !this.gameOver) {
      this.animate();
    } 
  }

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
        this.endGame(this.button);
        player2.addScore(); 
        player1.removeScore();
        this.scoreText2.innerText = player2.score; 
        console.log('colliding');
      }  else if (trail.color === 'green' && trail.isCollidingWith(player1)) {
        this.endGame(this.button);
        console.log(player1.score);
        player1.addScore();
        player2.removeScore();
        this.scoreText1.innerText = player1.score; 
        console.log(player1.score);
      }  
    });
  };

  handlePlayer(player) {
    const { canvas } = this.ctx;
   if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame(this.button);
        // this.addScore(this.players[0], this.players[1]);
      } else if (this.players[0].isCollidingWith(this.players[1])) {
        this.endGame(this.button);
         player1.addScore();
        this.scoreText1.innerText = this.players[0].score; 
        console.log('colliding');
      } else if (this.players[1].isCollidingWith(this.players[0])) {
        this.endGame(this.button);
        player2.addScore(); 
        this.scoreText2.innerText = this.players[1].score;
      } else if (player.isCollidingWithPath(player.path)) {
        this.endGame(this.button);
        console.log('colliding');
      }
   };

  endGame() {
    this.gameOver = true;
    this.button.innerText = 'RESTART';
  };

  resetGame() {
    //clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //set up game for animation loop again 
    this.paused = true;
    this.gameOver = false; 
    this.players = this.createPlayers();
    this.trails = [];
  };

  createPlayers() {
    return [
      new Player(10, 10, 20, 20, 'red', 1, 'black'),
      new Player(870, 300, 20, 20, 'green', -1, 'black')
    ];
  }

  isOver() {
    return this.gameOver;
  };

  toggleGame() {
    if (this.gameOver) {
      this.resetGame();
    }
    else if (this.paused) {
      this.button.innerText = 'START GAME';
      this.paused = !this.paused;
    } else if(!this.paused) {
      this.button.innerText = 'PAUSE';
      this.paused = !this.paused;
    } 
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