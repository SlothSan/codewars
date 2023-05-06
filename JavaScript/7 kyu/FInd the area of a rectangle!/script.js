/*
Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

This kata is meant for beginners. Rank and upvote to bring it out of beta!
*/
const area = (d, l) =>
  d <= l
    ? "Not a rectangle"
    : parseFloat((l * Math.sqrt(Math.pow(d, 2) - Math.pow(l, 2))).toFixed(2));

console.log(area(10, 5)); //44.30
