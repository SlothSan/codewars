/*
Perimeter sequence
The first three stages of a sequence are shown.

blocks

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
*/

const perimeterSequence = (a, n) => a * n * 4;

console.log(perimeterSequence(1, 12)); //48
