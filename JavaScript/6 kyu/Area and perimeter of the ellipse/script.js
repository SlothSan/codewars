/*
Task:
Based on the received dimensions, a and b, of an ellipse, calculare its area and perimeter.

Example:
Input: elipse(5,2)

Output: "Area: 31.4, perimeter: 23.1"
Note: The perimeter approximation formula you should use: π * (3/2(a+b) - sqrt(ab))

Have fun :)
*/

const elipse = (a, b) => {
  const area = Math.PI * a * b;
  const perimeter = Math.PI * (1.5 * (a + b) - Math.sqrt(a * b));
  return `Area: ${area.toFixed(1)}, perimeter: ${perimeter.toFixed(1)}`;
};

console.log(elipse(10, 4)); //Area: 125.7, perimeter: 46.1
