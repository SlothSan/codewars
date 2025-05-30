/*
The queen can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop. The queen captures by occupying the square on which an enemy piece sits. (wikipedia: https://en.wikipedia.org/wiki/Queen_(chess)).
Task:

Write a function availableMoves(position) which returns possibly moves of chess queen. Returned value should be an array with possible moves sorted alphabetically, exluded starting position.

For example when input position is A1 return value should be:

["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]

     A   B   C   D   E   F   G   H
   + - + - + - + - + - + - + - + - +
1  | Q | x | x | x | x | x | x | x |
   + - + - + - + - + - + - + - + - +
2  | x | x |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
3  | x |   | x |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
4  | x |   |   | x |   |   |   |   |
   + - + - + - + - + - + - + - + - +
5  | x |   |   |   | x |   |   |   |
   + - + - + - + - + - + - + - + - +
6  | x |   |   |   |   | x |   |   |
   + - + - + - + - + - + - + - + - +
7  | x |   |   |   |   |   | x |   |
   + - + - + - + - + - + - + - + - +
8  | x |   |   |   |   |   |   | x |
   + - + - + - + - + - + - + - + - +

Q = queen
x = available move

Input:

    input position can be any type (array, number, string and so on). If input position is not a string then return empty array.
    valid input position is one letter from A to H with number from 1 to 8, for example A1, C8, B3. If input is invalid (for example A10 or H0) then return empty array.
*/

const availableMoves = (position) => {
    if (typeof position !== "string") return [];

    const match = position.match(/^([A-H])([1-8])$/);
    if (!match) return [];

    const fileLetters = "ABCDEFGH";
    const startFileIndex = fileLetters.indexOf(match[1]);
    const startRankIndex = Number(match[2]) - 1;

    const directions = [
        [ 0,  1], [ 0, -1],
        [ 1,  0], [-1,  0],
        [ 1,  1], [ 1, -1],
        [-1,  1], [-1, -1]
    ];

    const possibleMoves = [];
    for (const [fileStep, rankStep] of directions) {
        let fileIndex = startFileIndex + fileStep;
        let rankIndex = startRankIndex + rankStep;
        while (fileIndex >= 0 && fileIndex < 8 && rankIndex >= 0 && rankIndex < 8) {
            possibleMoves.push(`${fileLetters[fileIndex]}${rankIndex + 1}`);
            fileIndex += fileStep;
            rankIndex += rankStep;
        }
    }
    return possibleMoves.sort();
}

console.log(availableMoves('C3'))

/*
[
  'A1', 'A3', 'A5', 'B2', 'B3',
  'B4', 'C1', 'C2', 'C4', 'C5',
  'C6', 'C7', 'C8', 'D2', 'D3',
  'D4', 'E1', 'E3', 'E5', 'F3',
  'F6', 'G3', 'G7', 'H3', 'H8'
]
*/