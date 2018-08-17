// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');
const Player = require('../lib/Player');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
};

describe('Game', () => {

  it.skip('should take properties', () => {
    //setup
    //execution
    //assertion
    //teardown
  })

  it.skip('should end the game if block collides with wall', () => {
      var player1 = new Player(50, 50, 10, 10, 'red', 'black');
      var player2 = new Player(100, 100, 10, 10, 'green', 'black');
      // if either player collides with the wall, this.gameEnd() should be invoked.
      assert.equal(gameEnd() === true)
      

  });

  it.skip('should collide with walls', () => {})
  it('should be able to change direction when keys are pressed', () => {
      var player1 = new Player(50, 50, 10, 10, 'red', 'black');
      var player2 = new Player(100, 100, 10, 10, 'green', 'black');
      assert.notStrictEqual(player1.x === 50, false)
      assert.notStrictEqual(player1.y === 50, false)
      assert.notStrictEqual(player2.x === 100, false)
      assert.notStrictEqual(player2.y === 100, false)
      // assert.equals(player1.handleKeyPress(), true)
      // assert.equals(player2.handleKeyPress(), true)   

  })

  it.skip('should be able to changeDirection', () => {})
})


///////////////////////////////////////////////////////

// const { assert } = require('chai');
// const GamePiece = require('../lib/GamePiece.js')

// describe('GamePiece', () => {
//   let gamepiece;

//   beforeEach(() => {
//     gamepiece = new GamePiece(30, 30, 10, 10, 'green')
//   })

//   it('should take properties', () => {
//     // Assertion
//     assert.deepEqual(gamepiece, {
//       x: 30,
//       y: 30,
//       height: 10,
//       width: 10,
//       color: 'green',
//       dx: 1,
//       dy: 0,
//       dxv: 1,
//       dyv: 1
//     })
//     // Teardown
//   })

//   it('should collide with a second gamepiece that occupies the same space', () => {
//     const gamepiece2 = new GamePiece(30, 30, 10, 10, 'green')

//     // Execution
//     const colliding = gamepiece.isCollidingWith(gamepiece2);

//     // Assertion
//     assert.isTrue(colliding);
//   })

//   it('should not collide with a second gamepiece that does not occupy the same space', () => {
//     const gamepiece2 = new GamePiece(130, 130, 10, 10, 'green')

//     // Execution
//     const colliding = gamepiece.isCollidingWith(gamepiece2);

//     // Assertion
//     assert.isFalse(colliding);
//   })

//   // it('should collide with walls', () => {})
//   // it('should be able to move', () => {})
//   // it('should be able to changeDirection', () => {})
// })
