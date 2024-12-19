/*
The 5x5 chessboard will be represented as a 2 dimensional array, (ie: an array containing 5 other arrays, each containing 5 single character elements). Empty spaces within each sub-array will be represented by an asterix: "*", while one of these 25 elements will be represented by a "q" (queen) and a "k" (king). Both will be represented in lower case.

The 2 dimensional chessboard array would look something like this:

var board = [ [ '*', '*', '*', '*', '*' ],
              [ '*', '*', '*', '*', 'k' ],
              [ '*', '*', '*', '*', '*' ],
              [ '*', 'q', '*', '*', '*' ],
              [ '*', '*', '*', '*', '*' ] ];
Your task is to write a function which will return true if the king is in check, and false if he isn't.

Click here for a more in-depth instruction on chess.
*/

const check = (board) => {
  let queenPos, kingPos;
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (board[row][col] === "q") queenPos = [row, col];
      if (board[row][col] === "k") kingPos = [row, col];
    }
  }
  if (!queenPos || !kingPos) return false;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  for (let [rowDir, colDir] of directions) {
    let [currentRow, currentCol] = queenPos;
    while (true) {
      currentRow += rowDir;
      currentCol += colDir;
      if (currentRow < 0 || currentRow > 4 || currentCol < 0 || currentCol > 4)
        break;
      if (board[currentRow][currentCol] === "k") return true;
      if (board[currentRow][currentCol] !== "*") break;
    }
  }
  return false;
};

console.log(
  check([
    ["*", "q", "*", "*", "k"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
  ])
); //true
