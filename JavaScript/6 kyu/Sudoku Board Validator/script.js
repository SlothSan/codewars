/*
Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
More info at: http://en.wikipedia.org/wiki/Sudoku

Sudoku Solution Validator
Write a function that accepts a Sudoku board, and returns true if it is a valid Sudoku solution, or false otherwise. The cells of the input Sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

Examples
Valid board:

  5 3 4|6 7 8|9 1 2
  6 7 2|1 9 5|3 4 8
  1 9 8|3 4 2|5 6 7
  -----+-----+-----
  8 5 9|7 6 1|4 2 3
  4 2 6|8 5 3|7 9 1
  7 1 3|9 2 4|8 5 6
  -----+-----+-----
  9 6 1|5 3 7|2 8 4
  2 8 7|4 1 9|6 3 5
  3 4 5|2 8 6|1 7 9
Invalid board:
                
              This column has two 3's
                        v
This cell has a 0 > 0 3 4|6 7 8|9 1 2
                    6 7 2|1 9 5|3 4 8
                    1 9 8|3 4 2|5 6 7
                    -----+-----+-----
                    8 5 9|7 6 1|4 2 3
                    4 2 6|8 5 3|7 9 1
                    7 1 3|9 2 4|8 5 6
                    -----+-----+-----
    This box has   /9 6 1|5 3 7|2 8 4
         two 3's >| 2 8 3|4 1 9|6 3 5 < This row has two 3's
                   \3 4 5|2 8 6|1 7 9
Details
All inputs are guaranteed to be 2D boards of size 9x9 with possible values in range 0-9.
Rows, columns and blocks (3x3 small squares) must contain each number from range 1-9 exactly once.
User solution must not modify input boards.
*/

const validateSudoku = (board) => {
  const hasAllDigits = (set) => {
    const digitSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    for (let digit of digitSet) {
      if (!set.has(digit)) {
        return false;
      }
    }

    return true;
  };

  const extractSubgrid = (grid, startRow, startCol) => {
    const subgrid = [];
    for (let i = 0; i < 3; i++) {
      subgrid.push(grid[startRow + i].slice(startCol, startCol + 3));
    }
    return subgrid;
  };

  const validateRows = (board) => {
    let allValid = true;
    board.forEach((row) => {
      const uniqueRows = new Set(row);
      if (!hasAllDigits(uniqueRows)) {
        allValid = false;
      }
    });

    return allValid;
  };

  const validateCols = (board) => {
    let allValid = true;
    for (let i = 0; i < 9; i++) {
      const currCol = [];
      for (let j = 0; j < 9; j++) {
        currCol.push(board[j][i]);
      }

      const uniqueCols = new Set(currCol);
      if (!hasAllDigits(uniqueCols)) {
        allValid = false;
      }
    }
    return allValid;
  };

  const validateSubGrids = (board) => {
    let allValid = true;
    for (let startRow = 0; startRow < 9; startRow += 3) {
      for (let startCol = 0; startCol < 9; startCol += 3) {
        const subGrid = extractSubgrid(board, startRow, startCol);
        const uniqueSubGrid = new Set(subGrid.flat());
        if (!hasAllDigits(uniqueSubGrid)) {
          allValid = false;
        }
      }
    }

    return allValid;
  };

  return validateRows(board) && validateCols(board) && validateSubGrids(board);
};

console.log(
  validateSudoku([
    [1, 3, 2, 5, 7, 9, 4, 6, 8],
    [4, 9, 8, 2, 6, 1, 3, 7, 5],
    [7, 5, 6, 3, 8, 4, 2, 1, 9],
    [6, 4, 3, 1, 5, 8, 7, 9, 2],
    [5, 2, 1, 7, 9, 3, 8, 4, 6],
    [9, 8, 7, 4, 2, 6, 5, 3, 1],
    [2, 1, 4, 9, 3, 5, 6, 8, 7],
    [3, 6, 5, 8, 1, 7, 9, 2, 4],
    [8, 7, 9, 6, 4, 2, 1, 5, 3],
  ])
);

//True
