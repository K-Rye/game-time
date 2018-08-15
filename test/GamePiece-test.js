// GamePiece-test.js
const { assert } = require('chai')
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', () => {
  let gamepiece; 
  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green');
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
      dxv: 1,
      dyv: 1
    })
    //Teardown
  });

  it('should collide with a second gamepiece that occupies the same space', () => {
    //Setup
    const gamepiece2 = new GamePiece(30, 30, 10, 10, 'green');
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

  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
})

    //Setup
    //Execution
    //Assertion
    //Teardown





