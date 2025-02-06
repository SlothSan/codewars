const bowlingPins = (arr) => {
  const pinPositions = {
    1: [3, 3],
    2: [2, 2],
    3: [2, 4],
    4: [1, 1],
    5: [1, 3],
    6: [1, 5],
    7: [0, 0],
    8: [0, 2],
    9: [0, 4],
    10: [0, 6],
  };

  const board = Array.from({ length: 4 }, () => Array(7).fill(" "));
  const removed = new Set(arr);

  for (let pin = 1; pin <= 10; pin++) {
    if (!removed.has(pin)) {
      const [row, col] = pinPositions[pin];
      board[row][col] = "I";
    }
  }

  return board.map((row) => row.join("")).join("\n");
};

console.log(bowlingPins([1, 4]));
/* 
I I I I
   I I 
  I I  
      
*/
