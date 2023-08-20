/*
Alternating Among Three Values
Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
f( 3, { a:3, b:4, c:5 } ) => 4
*/

export const f = (
  x: number,
  cc: { a: number; b: number; c: number }
): number => {
  const valueArray = Object.values(cc);
  const index = valueArray.indexOf(x);
  if (index === -1) {
    throw new Error("Value not found in the given values object.");
  }
  const nextIndex = (index + 1) % 3;
  return valueArray[nextIndex];
};
