/*
You are given an array of 6-faced dice. Each die is represented by its face up.

Calculate the minimum number of rotations needed to make all faces the same.

1 will require one rotation to have 2, 3, 4 and 5 face up, but would require two rotations to make it the face 6, as 6 is the opposite side of 1.

The opposite side of 2 is 5 and 3 is 4.

Examples
dice = {1, 1, 1, 1, 1, 6} --> 2:
rotate 6 twice to get 1

dice = {1, 2, 3} --> 2:
2 rotations are needed to make all faces either 1, 2, or 3

dice = {3, 3, 3} --> 0:
all faces are already identical

dice = {1, 6, 2, 3} --> 3:
rotate 1, 6 and 3 once to make them all 2
*/

const rotations = (dice) =>
  Math.min(
    ...[1, 2, 3, 4, 5, 6].map((t) =>
      dice.reduce(
        (r, f) =>
          r +
          (f === t
            ? 0
            : f === { 1: 6, 6: 1, 2: 5, 5: 2, 3: 4, 4: 3 }[t]
            ? 2
            : 1),
        0
      )
    )
  );

console.log(rotations([1, 3, 4, 5, 6])); //4
s;
