const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Player extends GamePiece {
  constructor(x, y, height, width, color, xdirection, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color, xdirection);

    this.borderColor = borderColor;
  } 

  draw(ctx) {
    const {x, y, height, width, xdirection, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}

