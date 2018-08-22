module.exports = class GamePiece {
  constructor(x, y, height, width, color, xdirection) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = xdirection;
    this.dy = 0;
    this.dxv = 2;
    this.dyv = 2;
  }

  isCollidingWithSelf(object) {
    let collidingObject = object.find( player => {
      return (
      this.x < player.x + player.width && 
      this.x + this.width > player.x &&
      this.y < player.y + player.height &&
      this.y + this.height > player.y
      )
    });
    if (collidingObject) {
      console.log('colliding');
      return true;
    } else {
      return false; 
    }
  }

  isCollidingWithPath(trails) {
    let slicedPath = trails.slice(40);
    if (this.isCollidingWithSelf(slicedPath)) {
      return true; 
    }
  }

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    )
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}