class Connect4 {
  constructor() {
    this.grid = Array(6)
      .fill()
      .map(() => Array(7).fill(0));
    this.player = 1;
    this.winner = null;
  }

  play(col) {
    if (this.winner) return "Game has finished!";
    const row = this.grid.findIndex((r) => r[col] === 0);
    if (row === -1) return "Column full!";

    this.grid[row][col] = this.player;
    if (this.checkWin(row, col)) {
      this.winner = this.player;
      return `Player ${this.player} wins!`;
    }

    this.player = 3 - this.player; // Switch player
    return `Player ${this.player === 1 ? 2 : 1} has a turn`;
  }

  checkWin(row, col) {
    const check = (r, c) => this.grid[r]?.[c] === this.player;
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ];
    return directions.some(([dr, dc]) => {
      let count = 1;
      for (let i = 1; check(row + dr * i, col + dc * i); i++) count++;
      for (let i = 1; check(row - dr * i, col - dc * i); i++) count++;
      return count >= 4;
    });
  }
}

let connect4 = new Connect4();
console.log(connect4.play(0));
console.log(connect4.play(1));
/*
Player 1 has a turn
Player 2 has a turn
*/

console.log(connect4.grid);
/*
[
  [
    1, 2, 0, 0,
    0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0
  ]
]
*/
