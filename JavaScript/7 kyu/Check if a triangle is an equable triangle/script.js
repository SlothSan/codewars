/*
A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!
*/

function equableTriangle(a, b, c) {
  const perimeter = a + b + c;
  const semiPerimeter = perimeter / 2;
  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
  );

  return area === perimeter;
}

console.log(equableTriangle(5, 12, 13)); //true
