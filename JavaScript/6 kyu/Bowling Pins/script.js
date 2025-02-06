/* 
Mount the Bowling Pins!
Task:
Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:

I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1
You will get an array of integers between 1 and 10, e.g. [3, 5, 9], and have to remove them from the field like this:

I I   I
 I   I
  I   
   I   
Return a string with the current field.

Note that:
The pins rows are separated by a newline (\n)
Each Line must be 7 chars long
Fill the missing pins with a space character ( )
Have fun!
*/

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
