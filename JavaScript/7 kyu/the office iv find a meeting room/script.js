/*
In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"

More in this series:

The Office I - Outed
The Office II - Boredeom Score
The Office III - Broken Photocopier
The Office V - Find a Chair
*/

const meeting = (x) => {
  let index = null;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "O") {
      index = i;
      break;
    }
  }
  return index === null ? "None available!" : index;
};

console.log(meeting(["X", "O", "X"])); // expect 1
