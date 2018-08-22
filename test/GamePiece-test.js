// GamePiece-test.js
const { assert } = require('chai')
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', () => {
  let gamepiece; 
  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green',1);
  });

  it('should take properties', () => {
    //Setup
    //Execution
    //Assertion
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 2,
      dyv: 2
    })
    //Teardown
  });

  it('should collide with a second gamepiece on left side', () => {
    //Setup
    const gamepiece2 = new GamePiece(39, 30, 10, 10, 'red', 1);
    //Execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);
    //Assertion
    assert.isTrue(colliding);
    //Teardown
  });

 it('should collide with a second gamepiece on right side', () => {
    //Setup
    const gamepiece2 = new GamePiece(21, 30, 10, 10, 'green', 1);
    //Execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);
    //Assertion
    assert.isTrue(colliding);
    //Teardown
  });

 it('should collide with a second gamepiece on top', () => {
    //Setup
    const gamepiece2 = new GamePiece(30, 21, 10, 10, 'green', 1);
    //Execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);
    //Assertion
    assert.isTrue(colliding);
    //Teardown
  });

 it('should collide with a second gamepiece on bottom', () => {
    //Setup
    const gamepiece2 = new GamePiece(30, 39, 10, 10, 'green', 1);
    //Execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);
    //Assertion
    assert.isTrue(colliding);
    //Teardown
  });

it('should not collide with a second gamepiece that does not occupy the same space', () => {
    //Setup
    const gamepiece2 = new GamePiece(130, 130, 10, 10, 'green');
    //Execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);
    //Assertion
    assert.isFalse(colliding);
    //Teardown
  });

  it('should collide with top wall', () => {
    const colliding =  gamepiece.isCollidingWithWall(30, 0);
    assert.isTrue(colliding);
  })
   it('should collide with bottom wall', () => {
    const colliding = gamepiece.isCollidingWithWall(30, 325);
    assert.isTrue(colliding);
  })
   it('should collide with right wall', () => {
    const colliding = gamepiece.isCollidingWithWall(900, 30);
    assert.isTrue(colliding);
  })
   it('should collide with left wall', () => {
    const colliding = gamepiece.isCollidingWithWall(0, 30);
    assert.isTrue(colliding);
  })
  it('should be able to move', () => {
    const move = gamepiece.move();
    assert.notEqual(30);
  })
  it.skip('should be able to changeDirection', () => {})
})

    //Setup
    //Execution
    //Assertion
    //Teardown





