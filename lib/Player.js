const GamePiece = require('./GamePiece');

module.exports = class Player extends GamePiece {
  constructor(x, y, height, width, color, xdirection, borderColor) {
    super(x, y, height, width, color, xdirection);
    this.path = [];
    this.score = 1000;
    this.borderColor = borderColor;
  } 

  draw(ctx) {
    const {x, y, height, width, xdirection, borderColor } = this;

    super.draw(ctx);

    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}

