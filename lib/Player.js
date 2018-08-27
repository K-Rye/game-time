const GamePiece = require('./GamePiece');

module.exports = class Player extends GamePiece {
  constructor(x, y, height, width, color, xdirection, borderColor) {
    super(x, y, height, width, color, xdirection);
    this.path = [];
    this.score = 0;

    this.borderColor = borderColor;
  } 

  //add lives function
  //subtract lives function 
  addScore() {
      this.score = this.score + 100;
  };

  removeScore() {
    if (this.score >= 100) {
      this.score = this.score - 100;
    }
  }

  draw(ctx) {
    const {x, y, height, width, xdirection, borderColor } = this;

    super.draw(ctx);

    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}

