/* 
In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.

In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

x2 - 4 * y2 = n
(where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

Examples:
solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
solEquaStr(90002) --> "[]"
Hint:
x2 - 4 * y2 = (x - 2*y) * (x + 2*y)
*/

const solequa = (n) => {
  let results = [];

  for (let a = 1; a * a <= n; a++) {
    if (n % a === 0) {
      let b = n / a;

      if ((a + b) % 2 === 0 && (b - a) % 4 === 0) {
        let x = (a + b) / 2;
        let y = (b - a) / 4;

        results.push([x, y]);
      }
    }
  }
  results.sort((a, b) => b[0] - a[0]);

  return results;
};

console.log(solequa(16)); //[ [ 4, 0 ] ]
