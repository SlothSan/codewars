/* 
Connect Four
Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
*/

const whoIsWinner = (piecesPositionList) => {
  const rows = 6,
    cols = 7;
  const board = Array.from({ length: rows }, () => Array(cols).fill(null));
  const colMapping = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

  for (const move of piecesPositionList) {
    const [colLetter, color] = move.split("_");
    const col = colMapping[colLetter];
    let placedRow = -1;
    for (let row = 0; row < rows; row++) {
      if (board[row][col] === null) {
        board[row][col] = color;
        placedRow = row;
        break;
      }
    }
    if (checkWin(board, placedRow, col, color)) {
      return color;
    }
  }
  return "Draw";
};

const checkWin = (board, row, col, color) => {
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];
  const totalRows = board.length;
  const totalCols = board[0].length;
  for (const [dx, dy] of directions) {
    let count = 1;
    let r = row + dx,
      c = col + dy;
    while (
      r >= 0 &&
      r < totalRows &&
      c >= 0 &&
      c < totalCols &&
      board[r][c] === color
    ) {
      count++;
      r += dx;
      c += dy;
    }
    r = row - dx;
    c = col - dy;
    while (
      r >= 0 &&
      r < totalRows &&
      c >= 0 &&
      c < totalCols &&
      board[r][c] === color
    ) {
      count++;
      r -= dx;
      c -= dy;
    }
    if (count >= 4) {
      return true;
    }
  }
  return false;
};

console.log(
  whoIsWinner([
    "C_Yellow",
    "E_Red",
    "G_Yellow",
    "B_Red",
    "D_Yellow",
    "B_Red",
    "B_Yellow",
    "G_Red",
    "C_Yellow",
    "C_Red",
    "D_Yellow",
    "F_Red",
    "E_Yellow",
    "A_Red",
    "A_Yellow",
    "G_Red",
    "A_Yellow",
    "F_Red",
    "F_Yellow",
    "D_Red",
    "B_Yellow",
    "E_Red",
    "D_Yellow",
    "A_Red",
    "G_Yellow",
    "D_Red",
    "D_Yellow",
    "C_Red",
  ])
); //Yellow
