/*
Task
Complete the function that accepts two arguments, an 8x8 array representing a chess board and a string. Depending on the value of the string which can be either "white" or "black", calculate the value of the pieces on the table for the corresponding player (white or black).
Empty fields will be marked as a space, while the fields with pieces look like this:

"w-king"   // meaning white king
"b-bishop" // a black bishop
"w-pawn"   // a white pawn
...and so on. There is an object available for you holding the value of each piece:

const hash = Object.freeze({
  queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
});
This is a rough estimation and the real piece value depends on other factors in game as well, such as the game being a closed or open one, which can favor either knights or bishops. But for our purposes we will use the mentioned values.

Note: the value of a king cannot be estimated because without it the game would be over, so DO NOT take into consideration the value of the king. You will not be tested for invalid input.

Examples
[ [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
  [" ", "b-king", " ", " ", "w-rook", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["w-king", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "] ], 
  "white")
This should return 14, because white has a queen (9) and a rook (5). The same board should return 9 for black (one queen).

[ [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
  [" ", "b-king", " ", "b-pawn", "w-rook", " ", " ", " "],
  [" ", " ", " ", " ", "w-pawn", " ", " ", " "],
  [" ", " ", " ", " ", " ", "w-bishop", " ", " "],
  ["w-king", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "b-pawn", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "] ],
  "white");
This should return 18 for white (queen, rook, pawn, bishop). The same board should return 11 for black (queen, 2 pawns)

Happy coding, warrior!
*/

const piecesValue = (board, color) => {
  let total = 0;

  for (let row of board) {
    for (let cell of row) {
      if (cell !== " " && cell.startsWith(color[0])) {
        // check color
        let piece = cell.split("-")[1];
        if (piece !== "king") {
          // skip the king
          total += hash[piece] || 0;
        }
      }
    }
  }

  return total;
};
