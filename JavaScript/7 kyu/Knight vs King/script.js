/*
Knight vs King

If you are not familiar with chess game you can learn more Here .

Here is the chess board (rows, denoted by numbers, are called ranks, columns, denoted by a letter, are called files):

alt text

You put a Knight and a King in the board.

Complete the method that tell us which one can capture the other one.

You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

Return:

    "Knight" if the knight is putting the king in check,
    "King" if the king is attacking the knight
    "None" if none of the above occur

Example:

knight = [7, "B"], king = [6, "C"]  ---> "King"

Check the test cases and Happy coding :)
*/

const knightVsKing = (knight, king) => {
  const fileToNumber = (file) => file.charCodeAt(0) - 64; // Convert 'A' to 1, 'B' to 2, etc.

  const [knightRank, knightFile] = [knight[0], fileToNumber(knight[1])];
  const [kingRank, kingFile] = [king[0], fileToNumber(king[1])];

  const knightMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  const kingMoves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  if (
    knightMoves.some(
      ([dx, dy]) => knightRank + dx === kingRank && knightFile + dy === kingFile
    )
  )
    return "Knight";
  if (
    kingMoves.some(
      ([dx, dy]) => kingRank + dx === knightRank && kingFile + dy === knightFile
    )
  )
    return "King";

  return "None";
}

console.log(knightVsKing([4, "C"], [6, "D"])); //Knight
